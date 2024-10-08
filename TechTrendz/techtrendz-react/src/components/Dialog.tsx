import { useState } from 'react';

interface DialogOptions {
    title: string;
    detail: string;
    yesText: string;
    noText: string;
}

export const useDialog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dialogOptions, setDialogOptions] = useState<DialogOptions | null>(null);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [resolveDialog, setResolveDialog] = useState<(value: boolean) => void>(() => { });

    const openDialog = (options: DialogOptions): Promise<boolean> => {
        setDialogOptions(options);
        setIsOpen(true);

        return new Promise<boolean>((resolve) => {
            setResolveDialog(() => resolve);
        });
    };

    const handleClose = (result: boolean) => {
        setIsOpen(false);
        setResolveDialog((prevResolve: any) => {
            prevResolve(result);
            return () => { };
        });
    };

    const Dialog = () => {
        if (!isOpen || !dialogOptions) return null;

        return (
            <div className="fixed inset-0 flex items-center justify-center z-50 background bg-opacity-50">
                <div className="background rounded-md border shadow-lg px-3 divide-y">
                    <h2 className="text-xl font-normal py-3">{dialogOptions.title}</h2>
                    <p className="py-3">{dialogOptions.detail}</p>
                    <div className="flex justify-end gap-2 py-3">
                        <button
                            onClick={() => handleClose(false)}
                            className="btn-hollow"
                        >
                            {dialogOptions.noText}
                        </button>
                        <button
                            onClick={() => handleClose(true)}
                            className="btn-hollow"
                        >
                            {dialogOptions.yesText}
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return { openDialog, Dialog };
};
