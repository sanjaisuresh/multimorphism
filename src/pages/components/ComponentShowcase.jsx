import React, { useState } from 'react'
import { PlusCircle, Search, Mail, Key } from 'lucide-react'

// Layout & Basic
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { TypographyH2, TypographyH3, TypographyP } from '@/components/ui/typography'

// Forms & Inputs
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'
import { Toggle } from '@/components/ui/toggle'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

// Navigation & Status
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Progress } from '@/components/ui/progress'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

// Complex Overlays
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerFooter, DrawerClose } from '@/components/ui/drawer'

// Advanced
import { Calendar } from '@/components/ui/calendar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { DatePicker, DateRangePicker, DateTimePicker } from '@/components/ui/date-picker'

// Charts
import { BarChart } from '@/components/charts/BarChart'
import { AreaChart } from '@/components/charts/AreaChart'
import { DonutChart } from '@/components/charts/DonutChart'
import { RadialBarChart } from '@/components/charts/RadialBarChart'
import { RadarChart } from '@/components/charts/RadarChart'

const ComponentShowcase = () => {
  const [date, setDate] = useState()
  const [dateRange, setDateRange] = useState()
  const [dateTime, setDateTime] = useState()

  return (
    <div className="w-full pb-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <TypographyH2>UI Component Showcase 🎨</TypographyH2>
          <TypographyP>Previewing the base Claymorphism building blocks via modular components.</TypographyP>
        </div>
      </div>
      
      <div className="space-y-12">
        
        {/* Core & Basics */}
        <section>
          <TypographyH3 className="mb-4 text-primary border-b-2 border-primary/20 pb-2 inline-block">1. Core Elements</TypographyH3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
                <h3 className="text-gray-500 font-semibold mb-4 border-b pb-2">Buttons & Badges</h3>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2">
                    <Badge color="blue">Primary</Badge>
                    <Badge color="green">Success</Badge>
                  </div>
                  <Button variant="primary"><PlusCircle size={18} /> Primary Action</Button>
                  <Button variant="secondary">Secondary Action</Button>
                </div>
            </Card>

            <Card>
                <h3 className="text-gray-500 font-semibold mb-4 border-b pb-2">Avatars & Tooltips</h3>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                </div>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" className="w-full">Hover me</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Tooltip content wrapped in clay!</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
            </Card>

            <Card>
                <h3 className="text-gray-500 font-semibold mb-4 border-b pb-2">Status Indicators</h3>
                <div className="flex flex-col gap-4">
                  <div>
                    <Label className="mb-1 block">Progress (60%)</Label>
                    <Progress value={60} className="w-full" />
                  </div>
                  <div>
                    <Label className="mb-1 block">Skeleton Loading</Label>
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div className="space-y-2 flex-1">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-4/5" />
                      </div>
                    </div>
                  </div>
                </div>
            </Card>
          </div>
        </section>

        {/* Inputs & Forms */}
        <section>
          <TypographyH3 className="mb-4 text-primary border-b-2 border-primary/20 pb-2 inline-block">2. Inputs & Forms</TypographyH3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
                <h3 className="text-gray-500 font-semibold mb-4 border-b pb-2">Text Inputs</h3>
                <div className="space-y-4">
                  <Input label="Email Address" type="email" placeholder="you@company.com" />
                  <div className="grid w-full gap-1.5">
                    <Label htmlFor="message">Message</Label>
                    <Textarea placeholder="Type your message here." id="message" />
                  </div>
                </div>
            </Card>

            <Card>
                <h3 className="text-gray-500 font-semibold mb-4 border-b pb-2">Selection Controls</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">Airplane Mode</Label>
                  </div>
                  <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="default" id="r1" />
                      <Label htmlFor="r1">Default</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="comfortable" id="r2" />
                      <Label htmlFor="r2">Comfortable</Label>
                    </div>
                  </RadioGroup>
                </div>
            </Card>

            <Card>
                <h3 className="text-gray-500 font-semibold mb-4 border-b pb-2">Complex Inputs</h3>
                <div className="space-y-6">
                  <div>
                    <Label className="mb-2 block">Volume Slider</Label>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                  <div>
                    <Label className="mb-2 block">OTP Input</Label>
                    <InputOTP maxLength={6}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                  <div>
                    <Label className="mb-2 block">Single Toggle</Label>
                    <Toggle aria-label="Toggle italic">
                      <Key className="h-4 w-4 mr-2" />
                      Secret Mode
                    </Toggle>
                  </div>
                  <div>
                    <Label className="mb-2 block">Toggle Group</Label>
                    <ToggleGroup type="single" defaultValue="a">
                      <ToggleGroupItem value="a">A</ToggleGroupItem>
                      <ToggleGroupItem value="b">B</ToggleGroupItem>
                      <ToggleGroupItem value="c">C</ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                </div>
            </Card>
          </div>
        </section>

        {/* Layout & Overlays */}
        <section>
          <TypographyH3 className="mb-4 text-primary border-b-2 border-primary/20 pb-2 inline-block">3. Interactive Layout & Overlays</TypographyH3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
                <h3 className="text-gray-500 font-semibold mb-4 border-b pb-2">Tabs & Breadcrumbs</h3>
                <Breadcrumb className="mb-6">
                  <BreadcrumbList>
                    <BreadcrumbItem><BreadcrumbLink>Home</BreadcrumbLink></BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem><BreadcrumbLink>Components</BreadcrumbLink></BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem><BreadcrumbPage>Layout</BreadcrumbPage></BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>

                <Tabs defaultValue="account" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account">
                    <div className="p-4 bg-white rounded-xl shadow-clay-base mt-4 text-sm text-gray-600 text-center">
                      Account settings panel using claymorphism
                    </div>
                  </TabsContent>
                  <TabsContent value="password">
                    <div className="p-4 bg-white rounded-xl shadow-clay-base mt-4 text-sm text-gray-600 text-center">
                      Password settings panel
                    </div>
                  </TabsContent>
                </Tabs>

                <Collapsible className="mt-6 w-full space-y-2">
                  <div className="flex items-center justify-between space-x-4 px-4">
                    <h4 className="text-sm font-semibold">
                      Collapsible Section
                    </h4>
                    <CollapsibleTrigger asChild>
                      <Button variant="outline" className="w-9 h-9 p-0">
                        <span className="sr-only">Toggle</span>
                        <PlusCircle className="h-4 w-4" />
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  <div className="rounded-xl border border-white/50 px-4 py-3 font-mono text-sm shadow-clay-inset bg-bgbase">
                    @claymorphism/ui
                  </div>
                  <CollapsibleContent className="space-y-2">
                    <div className="rounded-xl border border-white/50 px-4 py-3 font-mono text-sm shadow-clay-inset bg-bgbase">
                      @claymorphism/colors
                    </div>
                    <div className="rounded-xl border border-white/50 px-4 py-3 font-mono text-sm shadow-clay-inset bg-bgbase">
                      @claymorphism/icons
                    </div>
                  </CollapsibleContent>
                </Collapsible>
            </Card>

            <Card>
                <h3 className="text-gray-500 font-semibold mb-4 border-b pb-2">Menus & Pickers</h3>
                <div className="flex flex-wrap gap-4">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="secondary">Open Dropdown</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Billing</DropdownMenuItem>
                      <DropdownMenuItem>Team</DropdownMenuItem>
                      <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="outline">@reactjs</Button>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      The library for web and native user interfaces.
                    </HoverCardContent>
                  </HoverCard>
                </div>

                <div className="mt-6 w-full">
                  <h4 className="text-sm font-semibold mb-3 border-b pb-2 text-gray-500">Scroll Area</h4>
                  <ScrollArea className="h-[150px] w-full rounded-xl border border-white/50 bg-bgbase shadow-clay-inset p-4">
                    <h4 className="mb-4 text-sm font-medium leading-none">Terms of Service</h4>
                    <div className="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      <br /><br />
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                  </ScrollArea>
                </div>
            </Card>
          </div>
        </section>

        {/* Complex Modals */}
        <section>
          <TypographyH3 className="mb-4 text-primary border-b-2 border-primary/20 pb-2 inline-block">4. Complex Overlays</TypographyH3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="flex flex-col justify-center items-center py-12 gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="primary">Open Dialog Modal</Button>
                </DialogTrigger>
                <DialogContent onOpenAutoFocus={(e) => e.preventDefault()}>
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <Input label="Name" defaultValue="Sanjai" />
                  </div>
                </DialogContent>
              </Dialog>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="secondary">Open Side Sheet</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Claymorphism Sheet</SheetTitle>
                    <SheetDescription>
                      This slides in from the right with a soft clay shadow.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>

              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline">Open Bottom Drawer</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                      <DrawerTitle>Bottom Drawer</DrawerTitle>
                      <DrawerDescription>Useful for mobile views.</DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0 flex justify-center">
                      <div className="text-7xl">🚀</div>
                    </div>
                    <DrawerFooter>
                      <Button variant="primary">Submit</Button>
                      <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </Card>

            <Card className="flex flex-col items-center py-6 gap-6">
              <h3 className="text-gray-500 font-semibold mb-2 border-b pb-2 w-full text-left">Date Pickers</h3>
              
              <div className="w-full space-y-4">
                <div>
                  <Label className="mb-2 block">Standard Date Picker</Label>
                  <DatePicker date={date} setDate={setDate} />
                </div>
                
                <div>
                  <Label className="mb-2 block">Date Range Picker</Label>
                  <DateRangePicker date={dateRange} setDate={setDateRange} />
                </div>

                <div>
                  <Label className="mb-2 block">Date & Time Picker</Label>
                  <DateTimePicker date={dateTime} setDate={setDateTime} />
                </div>
              </div>
            </Card>
          </div>
        </section>

      </div>

      {/* Charts & Analytics */}
      <section className="mt-12">
        <TypographyH3 className="mb-4 text-primary border-b-2 border-primary/20 pb-2 inline-block">5. Charts & Analytics</TypographyH3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-gray-500 font-semibold mb-4 border-b pb-2">Revenue Growth (Area Chart)</h3>
            <div className="mt-4">
              <AreaChart 
                categories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                series={[
                  { name: '2025', data: [31, 40, 28, 51, 42, 109, 100] },
                  { name: '2026', data: [11, 32, 45, 32, 34, 52, 41] }
                ]}
              />
            </div>
          </Card>

          <Card>
            <h3 className="text-gray-500 font-semibold mb-4 border-b pb-2">Monthly Sales (Bar Chart)</h3>
            <div className="mt-4">
              <BarChart 
                categories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
                series={[{ name: 'Sales', data: [400, 430, 448, 470, 540, 580] }]}
              />
            </div>
          </Card>

          <Card>
            <h3 className="text-gray-500 font-semibold mb-4 border-b pb-2">Traffic Sources (Donut Chart)</h3>
            <div className="mt-4">
              <DonutChart 
                labels={['Direct', 'Social', 'Organic', 'Referral']}
                series={[44, 55, 41, 17]}
              />
            </div>
          </Card>

          <Card>
            <h3 className="text-gray-500 font-semibold mb-4 border-b pb-2">System Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <RadialBarChart 
                  labels={['CPU', 'Memory', 'Storage']}
                  series={[75, 60, 85]}
                  height={250}
                />
              </div>
              <div>
                <RadarChart 
                  categories={['Performance', 'SEO', 'Security', 'Accessibility', 'Best Practices']}
                  series={[
                    { name: 'Desktop', data: [80, 50, 30, 40, 100] },
                    { name: 'Mobile', data: [20, 30, 40, 80, 20] }
                  ]}
                  height={250}
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

    </div>
  )
}

export default ComponentShowcase
