import { Address, BankAccount, User } from "../../types/types";

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

export const getFormData = (object: any) => {
    const formData = new FormData();
    // Loop through the keys of the object and append their respective values to formData one by one
    Object.keys(object).forEach(key => {
        if (!(object[key] instanceof Object)) {
            // If the value at the current key is not an object, apppend to formData
            formData.append(key, object[key])
        } else {
            // Else, loop through its keys and append the value to formData one by one on key of parent key
            let innerObj = object[key]
            Object.keys(innerObj).forEach(innerKey => {
                formData.append(`${key}.${innerKey}`, object[key][innerKey])
            })
            // formData.append(key, JSON.stringify(innerObj))
        }
    });
    return formData;
}

export const getFormData_2 = (object: any) => Object.keys(object).reduce((formData, key) => {
    formData.append(key, object[key]);
    return formData;
}, new FormData())

const buildFormData = (formData: FormData, data: any, parentKey: any) => {
    if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File) && !(data instanceof Blob)) {
        // Handle object
        Object.keys(data).forEach(key => {
            buildFormData(formData, data[key], parentKey ? `${parentKey}.${key}` : key);
        });
    } else if (Array.isArray(data)) {
        // Handle array
        data.forEach((item, index) => {
            buildFormData(formData, item, `${parentKey ? parentKey + '.' : ''}${index}`);
        });
    } else {
        const value = data == null ? '' : data;

        formData.append(parentKey, value);
    }
}

export const jsonToFormData = (data: any) => {
    const formData = new FormData();

    buildFormData(formData, data, null);

    return formData;
}

export const userFullname = (user: User) => {
    // {user?.salutation.title}. {user?.forename} {user?.otherNames} {user?.lastname}
    let fullname = ""
    if (user) {
        if (user.salutation) {
            fullname += user.salutation.title + "."
        }
        if (user.forename) {
            fullname += (fullname === "" ? "" : " ") + user.forename
        }
        if (user.otherNames) {
            fullname += (fullname === "" ? "" : " ") + user.otherNames
        }
        if (user.lastname) {
            fullname += (fullname === "" ? "" : " ") + user.lastname
        }
    }
    return fullname
}

export const fullAddress = (a: Address) => {
    let address = ""
    if (a) {
        if (a.houseNumber) {
            address += (address === "" ? "" : " - ") + a.houseNumber
        }
        if (a.street) {
            address += (address === "" ? "" : " - ") + a.street
        }
        if (a.line1 && a.line1 !== a.street) {
            address += (address === "" ? "" : " - ") + a.line1
        }
        if (a.city) {
            address += (address === "" ? "" : " - ") + a.city
        }
        if (a.province) {
            address += (address === "" ? "" : " - ") + a.province
        }
        if (a.line2 && a.line2 !== a.province) {
            address += (address === "" ? "" : " - ") + a.line2
        }
    }
    return address
}

export const bankDetails = (account: BankAccount) => {
    let details = ""
    if (account) {
        if (account.bankName) details += account.bankName
        if (account.accountNumber) {
            details += details ? " - " + account.accountNumber : account.accountNumber
        }
        if (account.branchName) {
            details += (details ? " - " + account.branchName : account.branchName) + " branch"
        }
    }
    return details
}