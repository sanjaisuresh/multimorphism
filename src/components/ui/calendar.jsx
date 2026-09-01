import React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { cn } from "../../utils"
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 bg-bgbase rounded-2xl shadow-clay-base border border-white/40", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center w-full px-8",
        caption_label: "text-sm font-bold text-gray-800 whitespace-nowrap",
        caption_dropdowns: "flex justify-center gap-1 whitespace-nowrap",
        dropdown: "text-xs font-medium bg-transparent outline-none focus:ring-2 focus:ring-primary rounded-md px-1",
        dropdown_month: "flex items-center",
        dropdown_year: "flex items-center",
        vhidden: "sr-only",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          "h-7 w-7 bg-gray-100 flex items-center justify-center rounded-xl shadow-clay-base hover:shadow-clay-inset active:shadow-inner transition-all duration-200 text-gray-700 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-gray-500 rounded-md w-8 font-semibold text-[0.65rem] uppercase tracking-wider",
        row: "flex w-full mt-2 gap-0",
        cell: "h-8 w-8 text-center text-xs p-0 relative focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-gray-100/50 [&:has([aria-selected].day-outside)]:bg-gray-100/20 [&:has([aria-selected])]:rounded-lg transition-all duration-200",
        day: cn(
          "h-8 w-8 p-0 font-medium aria-selected:opacity-100 flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer text-gray-700 hover:bg-gray-100 hover:shadow-clay-inset"
        ),
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white shadow-clay-primary font-bold hover:shadow-clay-primary scale-[1.02]",
        day_today: "bg-gray-200 text-primary font-bold shadow-inner",
        day_outside: "text-gray-400 opacity-50 hover:bg-transparent hover:shadow-none aria-selected:bg-primary/50 aria-selected:text-white",
        day_disabled: "text-gray-300 opacity-30 cursor-not-allowed",
        day_range_middle: "aria-selected:bg-primary/20 aria-selected:!text-dark aria-selected:shadow-inner aria-selected:scale-100 rounded-none first:rounded-l-xl last:rounded-r-xl",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
