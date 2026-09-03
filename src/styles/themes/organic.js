export const organicTheme = {
  layout: {
    app: "h-screen w-full flex flex-col md:flex-row overflow-hidden bg-[#F9F6F0] dark:bg-[#1E1D1B] font-sans selection:bg-[#E2D9C8] dark:selection:bg-[#3D3A35]",
    sidebar: {
      container: "h-full flex-col bg-[#F4EFE6]/80 dark:bg-[#252422]/80 backdrop-blur-md z-20 relative border-r border-[#E8DFD0] dark:border-[#33312E] shadow-[4px_0_24px_rgba(139,121,94,0.03)] transition-all duration-300",
      linkActive: "bg-[#EAE1D1] dark:bg-[#312E2A] text-[#5C5042] dark:text-[#E2D9C8] font-medium rounded-2xl",
      linkInactive: "text-[#8C7A6B] dark:text-[#8E867D] hover:bg-[#F0E8D9] dark:hover:bg-[#2C2A27] hover:text-[#5C5042] dark:hover:text-[#E2D9C8] rounded-2xl"
    },
    header: "h-16 flex flex-shrink-0 items-center justify-between px-6 bg-[#F4EFE6]/80 dark:bg-[#252422]/80 backdrop-blur-md z-30 relative border-b border-[#E8DFD0] dark:border-[#33312E] shadow-[0_4px_24px_rgba(139,121,94,0.02)] transition-colors duration-300",
    breadcrumb: "w-full bg-[#F9F6F0] dark:bg-[#1E1D1B] border-b border-[#E8DFD0] dark:border-[#33312E] flex items-center px-6 py-3 z-10 text-sm font-medium text-[#8C7A6B] dark:text-[#8E867D] transition-colors duration-300"
  },
  dashboard: {
    statIcon: "rounded-full bg-[#EAE1D1] dark:bg-[#312E2A] text-[#5C5042] dark:text-[#E2D9C8]",
    badge: "rounded-full bg-[#EAE1D1] dark:bg-[#312E2A] text-[#5C5042] dark:text-[#E2D9C8] px-3 py-1",
    taskCircle: "w-3 h-3 rounded-full bg-[#8C7A6B] dark:bg-[#8E867D]",
    tabContainer: "flex bg-[#F0E8D9] dark:bg-[#252422] p-1 rounded-full",
    tabActive: "bg-[#F9F6F0] dark:bg-[#1E1D1B] text-[#5C5042] dark:text-[#E2D9C8] rounded-full shadow-sm",
    tabInactive: "text-[#8C7A6B] dark:text-[#8E867D] hover:text-[#5C5042] dark:hover:text-[#E2D9C8]",
    txIcon: "w-10 h-10 rounded-full bg-[#EAE1D1] dark:bg-[#312E2A] flex items-center justify-center text-[#5C5042] dark:text-[#E2D9C8]",
    txRow: "border-b border-[#E8DFD0] dark:border-[#33312E] last:border-0 hover:bg-[#F4EFE6] dark:hover:bg-[#252422] transition-colors rounded-xl",
    incomeItem: "flex flex-col bg-[#F4EFE6] dark:bg-[#252422] p-4 rounded-3xl"
  },
  profile: {
    avatarWrapper: "bg-[#EAE1D1] dark:bg-[#312E2A] rounded-full p-2",
    avatarInner: "bg-[#F9F6F0] dark:bg-[#1E1D1B] rounded-full overflow-hidden",
    editBtn: "bg-[#F9F6F0] dark:bg-[#1E1D1B] text-[#5C5042] dark:text-[#E2D9C8] border border-[#E8DFD0] dark:border-[#33312E] hover:scale-105 shadow-sm",
    tabsList: "mb-6 bg-[#F4EFE6] dark:bg-[#252422] p-1.5 rounded-full w-full justify-start",
    socialLink: "bg-[#F4EFE6] dark:bg-[#252422] rounded-full hover:bg-[#EAE1D1] dark:hover:bg-[#312E2A] text-[#8C7A6B] dark:text-[#8E867D]",
    connectionCount: "bg-[#EAE1D1] dark:bg-[#312E2A] text-[#5C5042] dark:text-[#E2D9C8] rounded-full",
    connectionItem: "bg-[#F4EFE6] dark:bg-[#252422] hover:bg-[#EAE1D1] dark:hover:bg-[#312E2A] rounded-[2rem]",
    projectIcon: "bg-[#EAE1D1] dark:bg-[#312E2A] rounded-full text-[#5C5042] dark:text-[#E2D9C8]",
    progressTrack: "bg-[#E8DFD0] dark:bg-[#33312E] rounded-full",
    avatarBorder: "border-2 border-[#F9F6F0] dark:border-[#1E1D1B]",
    newProjectCard: "border border-dashed border-[#C5BBAE] dark:border-[#524E49] bg-transparent hover:bg-[#F4EFE6] dark:hover:bg-[#252422] rounded-[2.5rem] min-h-[280px]"
  },
  settings: {
    btnActive: "bg-[#EAE1D1] dark:bg-[#312E2A] rounded-2xl text-[#5C5042] dark:text-[#E2D9C8] font-medium shadow-sm",
    btnInactive: "bg-transparent rounded-2xl text-[#8C7A6B] dark:text-[#8E867D] hover:bg-[#F4EFE6] dark:hover:bg-[#252422]",
    colorActive: "ring-2 ring-[#5C5042] dark:ring-[#E2D9C8] ring-offset-2 ring-offset-[#F9F6F0] dark:ring-offset-[#1E1D1B] scale-110",
    colorInactive: "hover:scale-110 opacity-80 hover:opacity-100",
    switchTrackActive: "bg-[#7A6A58] dark:bg-[#8E867D]",
    switchTrackInactive: "bg-[#D5CCBE] dark:bg-[#423E3A]",
    fontActive: "rounded-2xl bg-[#EAE1D1] dark:bg-[#312E2A] text-[#5C5042] dark:text-[#E2D9C8] font-medium",
    fontInactive: "rounded-2xl bg-transparent text-[#8C7A6B] dark:text-[#8E867D] hover:bg-[#F4EFE6] dark:hover:bg-[#252422]",
    sliderTrack: "bg-[#E8DFD0] dark:bg-[#33312E] rounded-full"
  },
  avatar: {
    root: "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[#E8DFD0] dark:border-[#33312E]",
    image: "aspect-square h-full w-full object-cover",
    fallback: "flex h-full w-full items-center justify-center rounded-full bg-[#EAE1D1] dark:bg-[#312E2A] text-[#5C5042] dark:text-[#E2D9C8] font-medium text-sm"
  },
  tabs: {
    list: "inline-flex items-center justify-center rounded-full bg-[#F4EFE6] dark:bg-[#252422] p-1",
    trigger: "inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all data-[state=active]:bg-[#F9F6F0] dark:data-[state=active]:bg-[#1E1D1B] data-[state=active]:text-[#5C5042] dark:data-[state=active]:text-[#E2D9C8] data-[state=active]:shadow-sm text-[#8C7A6B] dark:text-[#8E867D]"
  },
  typography: {
    h1: "scroll-m-20 text-4xl font-normal tracking-tight lg:text-5xl text-[#3A3229] dark:text-[#F0EBE1]",
    h2: "scroll-m-20 border-b border-[#E8DFD0] dark:border-[#33312E] pb-2 text-3xl font-normal tracking-tight transition-colors first:mt-0 text-[#3A3229] dark:text-[#F0EBE1]",
    h3: "scroll-m-20 text-2xl font-normal tracking-tight text-[#3A3229] dark:text-[#F0EBE1]",
    p: "leading-relaxed text-[#6B5D4E] dark:text-[#A8A198] font-light"
  },
  card: "bg-[#FDFCFB] dark:bg-[#1A1918] rounded-[2.5rem] shadow-[0_8px_30px_rgba(139,121,94,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] border border-[#F0E8D9] dark:border-[#2C2A27] p-6 md:p-8 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(139,121,94,0.08)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]",
  button: {
    base: "py-2.5 px-5 text-sm font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2",
    primary: "bg-[#5C5042] dark:bg-[#E2D9C8] text-[#F9F6F0] dark:text-[#1E1D1B] hover:opacity-90 active:scale-95 shadow-sm",
    secondary: "bg-[#F0E8D9] dark:bg-[#2C2A27] text-[#5C5042] dark:text-[#E2D9C8] hover:bg-[#EAE1D1] dark:hover:bg-[#312E2A] active:scale-95",
    outline: "bg-transparent text-[#5C5042] dark:text-[#E2D9C8] border border-[#C5BBAE] dark:border-[#524E49] hover:bg-[#F4EFE6] dark:hover:bg-[#252422] active:scale-95"
  },
  input: "w-full bg-[#F4EFE6] dark:bg-[#252422] rounded-2xl border-none outline-none focus:ring-2 focus:ring-[#C5BBAE] dark:focus:ring-[#524E49] text-[#3A3229] dark:text-[#F0EBE1] placeholder-[#A89F91] dark:placeholder-[#6E6862] transition-all px-4 py-3",
  switch: {
    root: "peer inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#7A6A58] dark:data-[state=checked]:bg-[#8E867D] data-[state=unchecked]:bg-[#D5CCBE] data-[state=unchecked]:dark:bg-[#423E3A]",
    thumb: "pointer-events-none block h-5 w-5 rounded-full bg-[#F9F6F0] dark:bg-[#1E1D1B] shadow-sm ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
  },
  checkbox: {
    root: "peer h-5 w-5 shrink-0 rounded-md border border-[#C5BBAE] dark:border-[#524E49] bg-[#F9F6F0] dark:bg-[#1E1D1B] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#5C5042] dark:data-[state=checked]:bg-[#E2D9C8] data-[state=checked]:text-[#F9F6F0] dark:data-[state=checked]:text-[#1E1D1B] data-[state=checked]:border-transparent",
    icon: "h-3.5 w-3.5"
  },
  slider: {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-2 w-full grow overflow-hidden rounded-full bg-[#E8DFD0] dark:bg-[#33312E]",
    range: "absolute h-full bg-[#7A6A58] dark:bg-[#8E867D]",
    thumb: "block h-5 w-5 rounded-full bg-[#F9F6F0] dark:bg-[#1E1D1B] border border-[#C5BBAE] dark:border-[#524E49] shadow-sm transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
  },
  tooltip: "z-50 overflow-hidden rounded-xl bg-[#3A3229] dark:bg-[#F0EBE1] px-3 py-1.5 text-sm text-[#F9F6F0] dark:text-[#1E1D1B] shadow-md animate-in fade-in-0 zoom-in-95",
  badge: "inline-flex items-center rounded-full bg-[#F0E8D9] dark:bg-[#2C2A27] px-3 py-1 text-xs font-medium text-[#5C5042] dark:text-[#E2D9C8]",
  popover: "z-50 w-72 rounded-[2rem] bg-[#FDFCFB] dark:bg-[#1A1918] p-5 text-[#3A3229] dark:text-[#F0EBE1] shadow-[0_10px_40px_rgba(139,121,94,0.1)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-[#F0E8D9] dark:border-[#2C2A27] outline-none animate-in zoom-in-95",
  
  label: "text-sm font-medium text-[#8C7A6B] dark:text-[#8E867D]",
  radio: {
    root: "grid gap-3",
    item: "aspect-square h-5 w-5 rounded-full border border-[#C5BBAE] dark:border-[#524E49] bg-transparent text-[#5C5042] dark:text-[#E2D9C8] transition-all",
  },
  otp: {
    container: "flex items-center gap-2",
    slot: "relative flex h-14 w-12 items-center justify-center text-xl bg-[#F4EFE6] dark:bg-[#252422] rounded-2xl text-[#3A3229] dark:text-[#F0EBE1] focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-[#C5BBAE] dark:focus-visible:ring-[#524E49]",
    slotActive: "z-10 bg-[#FDFCFB] dark:bg-[#1A1918] border border-[#C5BBAE] dark:border-[#524E49] shadow-sm",
    slotInactive: "",
  },
  toggle: {
    root: "inline-flex items-center justify-center rounded-full bg-[#F4EFE6] dark:bg-[#252422] text-[#8C7A6B] dark:text-[#8E867D] hover:bg-[#EAE1D1] dark:hover:bg-[#312E2A] data-[state=on]:bg-[#5C5042] dark:data-[state=on]:bg-[#E2D9C8] data-[state=on]:text-[#F9F6F0] dark:data-[state=on]:text-[#1E1D1B] transition-all px-4 py-2"
  },
  toggleGroup: {
    root: "flex items-center justify-center gap-1 bg-[#F4EFE6] dark:bg-[#252422] p-1 rounded-full w-fit",
    item: "inline-flex items-center justify-center rounded-full transition-all data-[state=on]:bg-[#F9F6F0] dark:data-[state=on]:bg-[#1E1D1B] data-[state=on]:text-[#5C5042] dark:data-[state=on]:text-[#E2D9C8] data-[state=on]:shadow-sm hover:bg-[#EAE1D1] dark:hover:bg-[#312E2A] text-[#8C7A6B] dark:text-[#8E867D] h-9 px-4 text-sm font-medium"
  },
}
