"use client";
import { useEffect, useMemo, useState } from "react";
type Row = Record<string, unknown>;
function stringify(v: unknown) {
    return Array.isArray(v)
        ? v.join(", ")
        : typeof v === "boolean"
          ? String(v)
          : String(v ?? "");
}
function parseValue(original: unknown, value: string) {
    if (Array.isArray(original))
        return value
            .split(",")
            .map((x) => x.trim())
            .filter(Boolean);
    if (typeof original === "boolean")
        return value === "true" || value === "on";
    if (typeof original === "number") return Number(value) || 0;
    return value;
}
export function FormInput({
    label,
    value,
    onChange,
}: {
    label: string;
    value: string;
    onChange: (v: string) => void;
}) {
    return (
        <label className="grid gap-2 text-sm font-bold text-slate-700">
            {label}
            <input
                className="rounded-xl border border-slate-300 px-4 py-3 font-normal"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </label>
    );
}
export function FormTextarea({
    label,
    value,
    onChange,
}: {
    label: string;
    value: string;
    onChange: (v: string) => void;
}) {
    return (
        <label className="grid gap-2 text-sm font-bold text-slate-700">
            {label}
            <textarea
                rows={4}
                className="rounded-xl border border-slate-300 px-4 py-3 font-normal"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </label>
    );
}
export function EmptyState({ message }: { message: string }) {
    return (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center font-bold text-slate-500">
            {message}
        </div>
    );
}
export function LoadingState() {
    return (
        <div className="rounded-3xl bg-white p-8 text-slate-500">
            Loading content…
        </div>
    );
}
export function AdminManager({
    storageKey,
    initial,
    title,
}: {
    storageKey: string;
    initial: Row[];
    title: string;
}) {
    const [rows, setRows] = useState<Row[]>(() => {
        if (typeof window === "undefined") return initial;
        const raw = window.localStorage.getItem(storageKey);
        return raw ? JSON.parse(raw) : initial;
    });
    const [editing, setEditing] = useState<Row | null>(null);
    const [error, setError] = useState("");
    const fields = useMemo(
        () => Object.keys(initial[0] || { title: "", description: "" }),
        [initial],
    );
    useEffect(() => {
        if (rows.length) localStorage.setItem(storageKey, JSON.stringify(rows));
    }, [rows, storageKey]);
    function start(row?: Row) {
        setError("");
        setEditing(
            row
                ? { ...row }
                : Object.fromEntries(
                      fields.map((f) => [
                          f,
                          Array.isArray(initial[0]?.[f])
                              ? []
                              : typeof initial[0]?.[f] === "boolean"
                                ? false
                                : "",
                      ]),
                  ),
        );
    }
    function save() {
        if (!editing) return;
        const primary = String(
            editing.title || editing.companyName || editing.clientName || "",
        ).trim();
        if (!primary) {
            setError("Please provide a title, company name, or client name.");
            return;
        }
        const key = fields[0];
        const exists = rows.findIndex(
            (r) => String(r[key]) === String(editing[key]),
        );
        setRows(
            exists >= 0
                ? rows.map((r, i) => (i === exists ? editing : r))
                : [...rows, editing],
        );
        setEditing(null);
    }
    function del(i: number) {
        if (confirm("Delete this content item?"))
            setRows(rows.filter((_, idx) => idx !== i));
    }
    return (
        <section className="grid gap-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-slate-600">
                    Add, edit, delete, and view {title.toLowerCase()} content.
                    Changes are stored in this browser using localStorage for
                    the first CMS version.
                </p>
                <button
                    className="rounded-full bg-blue-900 px-5 py-3 font-black text-white"
                    onClick={() => start()}
                >
                    Add content
                </button>
            </div>
            {rows.length === 0 ? (
                <EmptyState message="No content yet. Add the first item." />
            ) : (
                <div className="overflow-x-auto rounded-3xl bg-white shadow-sm">
                    <table className="w-full min-w-[760px] text-left text-sm">
                        <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                            <tr>
                                {fields.slice(0, 4).map((f) => (
                                    <th className="px-4 py-3" key={f}>
                                        {f}
                                    </th>
                                ))}
                                <th className="px-4 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((r, i) => (
                                <tr className="border-t" key={i}>
                                    {fields.slice(0, 4).map((f) => (
                                        <td
                                            className="max-w-xs px-4 py-3 align-top"
                                            key={f}
                                        >
                                            {stringify(r[f]).slice(0, 120)}
                                        </td>
                                    ))}
                                    <td className="px-4 py-3">
                                        <button
                                            className="mr-3 font-bold text-blue-900"
                                            onClick={() => start(r)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="font-bold text-red-700"
                                            onClick={() => del(i)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {editing && (
                <div className="rounded-3xl bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-black text-blue-950">
                        Edit content
                    </h2>
                    {error && (
                        <p className="mt-3 rounded-xl bg-red-50 p-3 text-sm font-bold text-red-700">
                            {error}
                        </p>
                    )}
                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                        {fields.map((f) => {
                            const val = stringify(editing[f]);
                            const setter = (v: string) =>
                                setEditing({
                                    ...editing,
                                    [f]: parseValue(initial[0]?.[f], v),
                                });
                            return val.length > 70 ||
                                f.toLowerCase().includes("description") ||
                                f === "content" ||
                                f === "message" ? (
                                <FormTextarea
                                    key={f}
                                    label={f}
                                    value={val}
                                    onChange={setter}
                                />
                            ) : (
                                <FormInput
                                    key={f}
                                    label={f}
                                    value={val}
                                    onChange={setter}
                                />
                            );
                        })}
                    </div>
                    <div className="mt-6 flex gap-3">
                        <button
                            className="rounded-full bg-blue-900 px-5 py-3 font-black text-white"
                            onClick={save}
                        >
                            Save
                        </button>
                        <button
                            className="rounded-full bg-slate-200 px-5 py-3 font-black"
                            onClick={() => setEditing(null)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
