import React, { useState } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon, Clock } from "lucide-react"

import { cn } from "../../utils"
import { Button } from "./button"
import { Calendar } from "./calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover"
import { Input } from "./input"
import { Label } from "./label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select"

export function DatePicker({ date, setDate, placeholder = "Pick a date", className }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          className={cn(
            "w-[280px] h-10 px-3 py-2 justify-start text-left font-normal bg-bgbase shadow-clay-inset rounded-xl border border-white/50 focus:ring-2 focus:ring-primary focus:outline-none transition-all flex items-center",
            !date && "text-gray-500",
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
          <span className="flex-1 text-sm">{date ? format(date, "PPP") : placeholder}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 border-none bg-transparent shadow-none mt-1" align="start" sideOffset={4}>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

export function DateRangePicker({ date, setDate, className }) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="secondary"
            className={cn(
              "w-[280px] h-10 px-3 py-2 justify-start text-left font-normal bg-bgbase shadow-clay-inset rounded-xl border border-white/50 focus:ring-2 focus:ring-primary focus:outline-none transition-all flex items-center",
              !date && "text-gray-500"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
            <span className="flex-1 text-sm text-ellipsis overflow-hidden whitespace-nowrap">
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                "Pick a date range"
              )}
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 border-none bg-transparent shadow-none mt-1" align="start" sideOffset={4}>
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export function DateTimePicker({ date, setDate, className }) {
  const [time, setTime] = useState(date ? format(date, "HH:mm") : "12:00")

  const handleTimeChange = (newHour, newMinute) => {
    const newTime = `${newHour}:${newMinute}`
    setTime(newTime)
    if (date) {
      const newDate = new Date(date)
      newDate.setHours(parseInt(newHour, 10))
      newDate.setMinutes(parseInt(newMinute, 10))
      setDate(newDate)
    }
  }

  const [currentHour, currentMinute] = time.split(":")

  const handleDateSelect = (newDate) => {
    if (newDate) {
      const [hours, minutes] = time.split(":")
      newDate.setHours(parseInt(hours, 10))
      newDate.setMinutes(parseInt(minutes, 10))
    }
    setDate(newDate)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          className={cn(
            "w-[280px] h-10 px-3 py-2 justify-start text-left font-normal bg-bgbase shadow-clay-inset rounded-xl border border-white/50 focus:ring-2 focus:ring-primary focus:outline-none transition-all flex items-center",
            !date && "text-gray-500",
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
          <span className="flex-1 text-sm">{date ? format(date, "PPP HH:mm") : "Pick date and time"}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 border-none bg-transparent shadow-none flex flex-col gap-3 mt-1" align="start" sideOffset={4}>
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          initialFocus
        />
        <div className="p-3 bg-bgbase rounded-2xl shadow-clay-base border border-white/40 flex items-center justify-between gap-4">
          <Clock className="text-primary h-5 w-5 ml-2" />
          <div className="flex-1 flex items-center gap-2 mr-2">
            <Select value={currentHour} onValueChange={(h) => handleTimeChange(h, currentMinute)}>
              <SelectTrigger className="flex-1 h-10 px-3 justify-center text-sm font-bold shadow-inner">
                <SelectValue placeholder="HH" />
              </SelectTrigger>
              <SelectContent className="max-h-[200px]">
                {Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0')).map((hour) => (
                  <SelectItem key={hour} value={hour} className="justify-center pl-2">
                    {hour}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span className="font-bold text-gray-500 text-sm">:</span>
            <Select value={currentMinute} onValueChange={(m) => handleTimeChange(currentHour, m)}>
              <SelectTrigger className="flex-1 h-10 px-3 justify-center text-sm font-bold shadow-inner">
                <SelectValue placeholder="MM" />
              </SelectTrigger>
              <SelectContent className="max-h-[200px]">
                {Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')).map((minute) => (
                  <SelectItem key={minute} value={minute} className="justify-center pl-2">
                    {minute}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
