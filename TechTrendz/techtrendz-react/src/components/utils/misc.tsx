export const ProductStatus = ({ product }: { product: any }) => {
    const getStatus = () => {
        let items: any[] = product.productItems
        let free = items ? items.filter(item => item.productStatus.name === "FREE") : [];
        let carted = items ? items.filter(item => item.productStatus.name === "CARTED") : [];
        let orderd = items ? items.filter(item => item.productStatus.name === "ORDERED") : [];
        let purchased = items ? items.filter(item => item.productStatus.name === "PURCHASED") : [];
        if (free.length > 0) {
            return "bg-green-600"
        } else if (carted.length > 0) {
            return "bg-yellow-500"
        }
        else if (orderd.length > 0) {
            return "bg-orange-500"
        }
        else if (purchased.length > 0) {
            return "bg-red-500"
        } else {
            return "bg-gray-700"
        }
    }

    return (
        <div className={`absolute top-3 left-3 w-5 aspect-square rounded-full border-2 border-white dark:border-black ${getStatus()}`}></div>
    )
}

export const numformat = (num: number) => {
    let result = "";
    if (num) {
        result = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return result;
}

export const combineFileLists = (fileList1: FileList | null, fileList2: FileList | null): FileList => {
    const dataTransfer = new DataTransfer();

    // Convert FileList to arrays of File objects and merge them
    const files1 = fileList1 ? Array.from(fileList1) : [];
    const files2 = fileList2 ? Array.from(fileList2) : [];
    const mergedFiles = [...files1, ...files2];

    // Add the merged files to the DataTransfer object
    mergedFiles.forEach(file => dataTransfer.items.add(file));

    // Return the FileList from DataTransfer
    return dataTransfer.files;
};

export const removeFileFromFilelist = (index: number, fileList: FileList | null | undefined) => {
    const dataTransfer = new DataTransfer();

    // Convert FileList to arrays of File objects and merge them
    const files = fileList ? Array.from(fileList) : [];
    const newFiles = [
        ...files.slice(0, index),
        ...files.slice(index + 1),
    ]

    // Add the merged files to the DataTransfer object
    newFiles.forEach(file => dataTransfer.items.add(file));

    // Return the FileList from DataTransfer
    return dataTransfer.files;
}