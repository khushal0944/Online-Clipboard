import { FormEvent } from "react";

interface RetrieveTextFormProps {
    retrieveId: string | null;
    onRetrieveIdChange: (id: string) => void;
    onRetrieve: (e: FormEvent<HTMLFormElement>) => void;
    retrieveLoading: boolean;
}

export function RetrieveTextForm({
    retrieveId,
    onRetrieveIdChange,
    onRetrieve,
    retrieveLoading,
}: RetrieveTextFormProps) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 4);
        onRetrieveIdChange(value);
    };

    return (
        <div className="bg-white rounded-lg shadow-sm w-full max-w-2xl dark:bg-gray-900 p-6 border-2 border-gray-900 dark:border-gray-200">
            <h2 className="text-2xl font-bold dark:text-white text-gray-800 mb-2">
                Retrieve Text
            </h2>
            <p className="text-gray-600 mb-6 dark:text-gray-200">
                Enter the 4-digit ID to retrieve your saved text
            </p>

            <form
                className="flex mb-6 mx-auto w-11/12 rounded-lg min-[500px]:border border-gray-300 fixRetrieveBtn"
                onSubmit={onRetrieve}
            >
                <input
                    type="text"
                    className="flex-1 p-3 w-full dark:bg-gray-800 placeholder:text-lg dark:focus:bg-gray-950 dark:text-white outline-none max-[500px]:rounded-lg rounded-l-md text-center text-xl font-mono max-[500px]:border bg-gray-100 border-gray-700 dark:border-gray-300 focus:bg-[#fafafa]"
                    placeholder="Enter Board ID to retrieve"
                    value={retrieveId || ""}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="px-3 py-2 max-[500px]:mt-2 max-[500px]:rounded-lg bg-black text-white rounded-r-md hover:bg-gray-800 transition-colors"
                    disabled={retrieveLoading}
                >
                    {retrieveLoading ? "Retrieving.." : "Retrieve Text"}
                </button>
            </form>
        </div>
    );
}
