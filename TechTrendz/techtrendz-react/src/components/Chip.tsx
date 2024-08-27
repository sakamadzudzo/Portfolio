// export type ChipVariant = { variant: "success" | "info" | "warning" | "danger" }
export const ChipVariant = {} as { success?: boolean, info?: boolean, warning?: boolean, danger?: boolean }

export const Chip = ({
    data,
    tooltip,
    variant,
    extraItems
}: {
    data: string,
    tooltip?: string,
    variant?: typeof ChipVariant,
    extraItems?: boolean
}) => {

    return (
        <div className={`w-fit border px-2 rounded-full bg-inherit/90 cursor-pointer relative group h-full ${!variant?.success && !variant?.info && !variant?.warning && !variant?.danger && 'bg-light-100 dark:bg-dark-100/70 hover:bg-light-200 hover:dark:bg-dark-200'}
        ${variant?.success && 'bg-green-400 dark:bg-green-700'} ${variant?.info && 'bg-picton-400 dark:bg-picton-700'} ${variant?.warning && 'bg-yellow-400 dark:bg-yellow-700'} ${variant?.danger && 'bg-red-400 dark:bg-red-700'} ${extraItems && 'text-xs flex justify-center items-center h-full'}`}>
            {data}
            <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 hidden group-hover:block group-focus:block hover:hidden focus:hidden whitespace-nowrap text-ellipsis bg-dark-50 dark:bg-light-50 text-light-50 dark:text-dark-50 px-1 rounded-md text-base`}>
                {tooltip}
                <div className="invisible absolute top-5 left-1/2 transform -translate-x-1/2 h-2 w-2 bg-inherit text-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"></div>
            </div>
        </div>
    )
}