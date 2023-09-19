'use client'
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { SearchProps } from "./types/searchProps";

export function Search({ field }: SearchProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [input, setInput] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput('');
    const searchParams = new URLSearchParams({ [field]: input });
    const searchQuery = input ? `?${searchParams}` : '';
    const url = pathname + searchQuery;
    router.push(url);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex align-center gap-2"
    >
      <input
        placeholder="Type filter here"
        type="text"
        onChange={handleInput}
        className="p-2 w-56 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button type="submit" className="text-xl">🚀</button>
    </form>
  )
}
