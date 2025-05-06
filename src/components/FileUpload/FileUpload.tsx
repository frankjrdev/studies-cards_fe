import { useState, useCallback } from "react";
import { Dialog } from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";
import * as XLSX from "xlsx";

interface FlashcardData {
  question: string;
  answer: string;
  selected: boolean;
}

export function FileUpload() {
  const [isOpen, setIsOpen] = useState(false);
  const [flashcards, setFlashcards] = useState<FlashcardData[]>([]);

  const handleFileUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = e.target?.result;
          const workbook = XLSX.read(data, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);

          const formattedData = jsonData.map((row: any) => ({
            question: row.question || "",
            answer: row.answer || "",
            selected: true,
          }));

          setFlashcards(formattedData);
        } catch (error) {
          console.error("Error processing file:", error);
          // You might want to show an error message to the user here
        }
      };

      reader.readAsBinaryString(file);
    },
    []
  );

  const toggleSelection = (index: number) => {
    setFlashcards((prev) =>
      prev.map((card, i) =>
        i === index ? { ...card, selected: !card.selected } : card
      )
    );
  };

  const handleCreateFlashcards = () => {
    const selectedCards = flashcards.filter((card) => card.selected);
    // Here you would typically call your API to create the flashcards
    console.log("Creating flashcards:", selectedCards);
    setIsOpen(false);
  };

  return (
    <>
      <Button
        variant="secondary"
        size="icon"
        className="rounded-full bg-secondary-500 hover:bg-secondary-600 text-white shadow-md"
        onClick={() => setIsOpen(true)}
      >
        <Plus color="#4c1d95" className="h-5 w-5" />
      </Button>

      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Import Flashcards File"
        className="max-w-4xl"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center w-full h-32 border-2 border-grey-300 border-dashed rounded-lg cursor-pointer bg-grey-50 hover:bg-grey-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-grey-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-grey-500">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-grey-500">XLSX or XLS</p>
              </div>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                accept=".xlsx,.xls"
                onChange={handleFileUpload}
              />
            </label>
          </div>

          {flashcards.length > 0 && (
            <div className="mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-grey-500">
                  <thead className="text-xs text-grey-700 uppercase bg-grey-50">
                    <tr>
                      <th scope="col" className="p-4">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-primary-600 bg-grey-100 border-grey-300 rounded focus:ring-primary-500"
                            checked={flashcards.every((card) => card.selected)}
                            onChange={(e) =>
                              setFlashcards((prev) =>
                                prev.map((card) => ({
                                  ...card,
                                  selected: e.target.checked,
                                }))
                              )
                            }
                          />
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Question
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Answer
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {flashcards.map((card, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b hover:bg-grey-50"
                      >
                        <td className="p-4">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-primary-600 bg-grey-100 border-grey-300 rounded focus:ring-primary-500"
                              checked={card.selected}
                              onChange={() => toggleSelection(index)}
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4">{card.question}</td>
                        <td className="px-6 py-4">{card.answer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
                <Button
                  onClick={handleCreateFlashcards}
                  disabled={!flashcards.some((card) => card.selected)}
                >
                  Create Flashcards
                </Button>
              </div>
            </div>
          )}
        </div>
      </Dialog>
    </>
  );
}
