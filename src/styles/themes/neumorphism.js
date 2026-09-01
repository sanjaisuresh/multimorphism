export const neumorphismTheme = {
  layout: {
    app: "h-screen w-full flex flex-col md:flex-row overflow-hidden bg-[#e0e5ec] dark:bg-[#1a1b1e] transition-colors duration-500",
    sidebar: {
      container: "h-full flex-col bg-[#e0e5ec] dark:bg-[#1a1b1e] z-20 relative transition-all duration-300 shadow-[8px_0_16px_#b8bcc2,-8px_0_16px_#ffffff] dark:shadow-[8px_0_16px_#0d0e0f,-8px_0_16px_#27282d]",
      linkActive: "bg-[#e0e5ec] dark:bg-[#1a1b1e] text-primary font-bold rounded-xl shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_#0d0e0f,inset_-4px_-4px_8px_#27282d]",
      linkInactive: "text-gray-500 dark:text-gray-400 hover:text-primary rounded-xl transition-all hover:shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] dark:hover:shadow-[4px_4px_8px_#0d0e0f,-4px_-4px_8px_#27282d]"
    },
    header: "h-16 flex flex-shrink-0 items-center justify-between px-6 bg-[#e0e5ec] dark:bg-[#1a1b1e] z-30 relative transition-colors duration-500 shadow-[0_8px_16px_#b8bcc2,0_-8px_16px_#ffffff] dark:shadow-[0_8px_16px_#0d0e0f,0_-8px_16px_#27282d]",
    breadcrumb: "w-full bg-[#e0e5ec] dark:bg-[#1a1b1e] flex items-center px-6 py-3 z-10 text-sm font-semibold text-gray-600 dark:text-gray-300 transition-colors duration-500 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_-2px_4px_rgba(255,255,255,0.02)]"
  },
  dashboard: {
    statIcon: "rounded-2xl bg-[#e0e5ec] dark:bg-[#1a1b1e] shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] dark:shadow-[4px_4px_8px_#0d0e0f,-4px_-4px_8px_#27282d]",
    badge: "rounded-full bg-[#e0e5ec] dark:bg-[#1a1b1e] shadow-[inset_2px_2px_5px_#b8bcc2,inset_-2px_-2px_5px_#ffffff] dark:shadow-[inset_2px_2px_5px_#0d0e0f,inset_-2px_-2px_5px_#27282d]",
    taskCircle: "w-3 h-3 rounded-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)]",
    tabContainer: "flex bg-[#e0e5ec] dark:bg-[#1a1b1e] p-1 rounded-2xl shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_#0d0e0f,inset_-4px_-4px_8px_#27282d]",
    tabActive: "bg-[#e0e5ec] dark:bg-[#1a1b1e] text-primary rounded-xl shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] dark:shadow-[4px_4px_8px_#0d0e0f,-4px_-4px_8px_#27282d]",
    tabInactive: "text-gray-500 hover:text-primary rounded-xl",
    txIcon: "w-10 h-10 rounded-full bg-[#e0e5ec] dark:bg-[#1a1b1e] flex items-center justify-center text-primary shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] dark:shadow-[4px_4px_8px_#0d0e0f,-4px_-4px_8px_#27282d]",
    txRow: "border-b-0 mb-3 rounded-xl p-3 bg-[#e0e5ec] dark:bg-[#1a1b1e] hover:shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] dark:hover:shadow-[4px_4px_8px_#0d0e0f,-4px_-4px_8px_#27282d] transition-all",
    incomeItem: "flex flex-col p-4 rounded-2xl bg-[#e0e5ec] dark:bg-[#1a1b1e] shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] dark:shadow-[4px_4px_8px_#0d0e0f,-4px_-4px_8px_#27282d]"
  },
  profile: {
    avatarWrapper: "bg-[#e0e5ec] dark:bg-[#1a1b1e] rounded-full p-2 shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#0d0e0f,-8px_-8px_16px_#27282d]",
    avatarInner: "shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_#0d0e0f,inset_-4px_-4px_8px_#27282d] rounded-full",
    editBtn: "bg-[#e0e5ec] dark:bg-[#1a1b1e] text-primary shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] dark:shadow-[4px_4px_8px_#0d0e0f,-4px_-4px_8px_#27282d] hover:shadow-[inset_2px_2px_5px_#b8bcc2,inset_-2px_-2px_5px_#ffffff] dark:hover:shadow-[inset_2px_2px_5px_#0d0e0f,inset_-2px_-2px_5px_#27282d] hover:scale-95 rounded-xl transition-all",
    tabsList: "mb-6 bg-[#e0e5ec] dark:bg-[#1a1b1e] p-1.5 rounded-2xl w-full justify-start overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_#0d0e0f,inset_-4px_-4px_8px_#27282d]",
    socialLink: "bg-[#e0e5ec] dark:bg-[#1a1b1e] rounded-xl shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] dark:shadow-[4px_4px_8px_#0d0e0f,-4px_-4px_8px_#27282d] hover:shadow-[inset_2px_2px_5px_#b8bcc2,inset_-2px_-2px_5px_#ffffff] dark:hover:shadow-[inset_2px_2px_5px_#0d0e0f,inset_-2px_-2px_5px_#27282d] transition-all hover:scale-95 text-gray-600 dark:text-gray-300",
    connectionCount: "bg-[#e0e5ec] dark:bg-[#1a1b1e] rounded-lg shadow-[inset_2px_2px_5px_#b8bcc2,inset_-2px_-2px_5px_#ffffff] dark:shadow-[inset_2px_2px_5px_#0d0e0f,inset_-2px_-2px_5px_#27282d]",
    connectionItem: "bg-[#e0e5ec] dark:bg-[#1a1b1e] rounded-2xl p-4 shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] dark:shadow-[4px_4px_8px_#0d0e0f,-4px_-4px_8px_#27282d] hover:shadow-[inset_2px_2px_5px_#b8bcc2,inset_-2px_-2px_5px_#ffffff] dark:hover:shadow-[inset_2px_2px_5px_#0d0e0f,inset_-2px_-2px_5px_#27282d] transition-all duration-300",
    projectIcon: "bg-[#e0e5ec] dark:bg-[#1a1b1e] rounded-xl text-primary shadow-[inset_2px_2px_5px_#b8bcc2,inset_-2px_-2px_5px_#ffffff] dark:shadow-[inset_2px_2px_5px_#0d0e0f,inset_-2px_-2px_5px_#27282d]",
    progressTrack: "bg-[#e0e5ec] dark:bg-[#1a1b1e] rounded-full overflow-hidden shadow-[inset_2px_2px_5px_#b8bcc2,inset_-2px_-2px_5px_#ffffff] dark:shadow-[inset_2px_2px_5px_#0d0e0f,inset_-2px_-2px_5px_#27282d]",
    avatarBorder: "border-transparent",
    newProjectCard: "border-0 bg-[#e0e5ec] dark:bg-[#1a1b1e] rounded-2xl min-h-[280px] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_#0d0e0f,inset_-4px_-4px_8px_#27282d] hover:shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] dark:hover:shadow-[4px_4px_8px_#0d0e0f,-4px_-4px_8px_#27282d] transition-all cursor-pointer"
  },
  settings: {
    btnActive: "bg-[#e0e5ec] dark:bg-[#1a1b1e] rounded-2xl text-primary shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_#0d0e0f,inset_-4px_-4px_8px_#27282d]",
    btnInactive: "bg-[#e0e5ec] dark:bg-[#1a1b1e] rounded-2xl text-gray-500 hover:text-primary shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] dark:shadow-[4px_4px_8px_#0d0e0f,-4px_-4px_8px_#27282d]",
    colorActive: "scale-90 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.2)]",
    colorInactive: "shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] dark:shadow-[4px_4px_8px_#0d0e0f,-4px_-4px_8px_#27282d] hover:scale-105",
    switchTrackActive: "bg-[#e0e5ec] dark:bg-[#1a1b1e] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_#0d0e0f,inset_-4px_-4px_8px_#27282d]",
    switchTrackInactive: "bg-[#e0e5ec] dark:bg-[#1a1b1e] shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] dark:shadow-[4px_4px_8px_#0d0e0f,-4px_-4px_8px_#27282d]",
    fontActive: "rounded-2xl bg-[#e0e5ec] dark:bg-[#1a1b1e] text-primary font-bold shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_#0d0e0f,inset_-4px_-4px_8px_#27282d] px-4",
    fontInactive: "rounded-2xl bg-[#e0e5ec] dark:bg-[#1a1b1e] text-gray-600 font-medium hover:text-primary shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] dark:shadow-[4px_4px_8px_#0d0e0f,-4px_-4px_8px_#27282d] px-4",
    sliderTrack: "bg-[#e0e5ec] dark:bg-[#1a1b1e] shadow-[inset_2px_2px_5px_#b8bcc2,inset_-2px_-2px_5px_#ffffff] dark:shadow-[inset_2px_2px_5px_#0d0e0f,inset_-2px_-2px_5px_#27282d] rounded-full h-4 accent-primary"
  },
  avatar: {
    root: "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#e0e5ec] dark:bg-[#1a1b1e] shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] dark:shadow-[4px_4px_8px_#0d0e0f,-4px_-4px_8px_#27282d]",
    image: "aspect-square h-full w-full object-cover",
    fallback: "flex h-full w-full items-center justify-center rounded-full bg-[#e0e5ec] dark:bg-[#1a1b1e] shadow-[inset_2px_2px_5px_#b8bcc2,inset_-2px_-2px_5px_#ffffff] dark:shadow-[inset_2px_2px_5px_#0d0e0f,inset_-2px_-2px_5px_#27282d] text-primary font-semibold text-sm"
  },
  tabs: {
    list: "inline-flex items-center justify-center rounded-2xl bg-[#e0e5ec] dark:bg-[#1a1b1e] p-1 text-gray-600 shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_#0d0e0f,inset_-4px_-4px_8px_#27282d]",
    trigger: "inline-flex items-center justify-center whitespace-nowrap rounded-xl px-3 py-1.5 text-sm font-medium transition-all data-[state=active]:bg-[#e0e5ec] dark:data-[state=active]:bg-[#1a1b1e] data-[state=active]:text-primary data-[state=active]:shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] dark:data-[state=active]:shadow-[4px_4px_8px_#0d0e0f,-4px_-4px_8px_#27282d]"
  },
  typography: {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-gray-800 dark:text-gray-100",
    h2: "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight text-gray-800 dark:text-gray-100",
    h3: "scroll-m-20 text-2xl font-semibold tracking-tight text-gray-800 dark:text-gray-100",
    p: "leading-7 text-gray-600 dark:text-gray-400"
  },
  card: "bg-[#e0e5ec] dark:bg-[#1a1b1e] rounded-3xl p-6 transition-all duration-300 shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#0d0e0f,-8px_-8px_16px_#27282d]",
  button: {
    base: "py-2 px-4 text-sm font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2",
    primary: "bg-[#e0e5ec] dark:bg-[#1a1b1e] text-primary shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] dark:shadow-[4px_4px_8px_#0d0e0f,-4px_-4px_8px_#27282d] hover:shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] dark:hover:shadow-[inset_4px_4px_8px_#0d0e0f,inset_-4px_-4px_8px_#27282d] hover:scale-95",
    secondary: "bg-[#e0e5ec] dark:bg-[#1a1b1e] text-gray-600 dark:text-gray-300 shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] dark:shadow-[4px_4px_8px_#0d0e0f,-4px_-4px_8px_#27282d] hover:shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] dark:hover:shadow-[inset_4px_4px_8px_#0d0e0f,inset_-4px_-4px_8px_#27282d] hover:scale-95",
    outline: "bg-[#e0e5ec] dark:bg-[#1a1b1e] text-primary shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_#0d0e0f,inset_-4px_-4px_8px_#27282d] hover:shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] dark:hover:shadow-[4px_4px_8px_#0d0e0f,-4px_-4px_8px_#27282d] hover:scale-105"
  },
  input: "w-full bg-[#e0e5ec] dark:bg-[#1a1b1e] rounded-xl border-none outline-none focus:ring-0 shadow-[inset_8px_8px_16px_#b8bcc2,inset_-8px_-8px_16px_#ffffff] dark:shadow-[inset_8px_8px_16px_#0d0e0f,inset_-8px_-8px_16px_#27282d] text-[#4a5568] dark:text-[#a0aec0] placeholder-[#a0aec0] dark:placeholder-[#4a5568] px-4 py-2 transition-all",
  switch: {
    root: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-none transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-[#e0e5ec] dark:data-[state=unchecked]:bg-[#1a1b1e] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_#0d0e0f,inset_-4px_-4px_8px_#27282d] data-[state=checked]:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2)]",
    thumb: "pointer-events-none block h-5 w-5 rounded-full bg-[#e0e5ec] dark:bg-[#1a1b1e] shadow-[2px_2px_4px_#b8bcc2,-2px_-2px_4px_#ffffff] dark:shadow-[2px_2px_4px_#0d0e0f,-2px_-2px_4px_#27282d] transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
  },
  checkbox: {
    root: "peer h-5 w-5 shrink-0 rounded-md border-none bg-[#e0e5ec] dark:bg-[#1a1b1e] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_#0d0e0f,inset_-4px_-4px_8px_#27282d] focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-white transition-all",
    icon: "h-4 w-4 drop-shadow-md"
  },
  slider: {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-3 w-full grow overflow-hidden rounded-full bg-[#e0e5ec] dark:bg-[#1a1b1e] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_#0d0e0f,inset_-4px_-4px_8px_#27282d]",
    range: "absolute h-full bg-primary",
    thumb: "block h-6 w-6 rounded-full border-none bg-[#e0e5ec] dark:bg-[#1a1b1e] shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] dark:shadow-[4px_4px_8px_#0d0e0f,-4px_-4px_8px_#27282d] transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
  },
  tooltip: "z-50 overflow-hidden rounded-xl bg-[#e0e5ec] dark:bg-[#1a1b1e] px-4 py-2 text-sm font-medium text-[#4a5568] dark:text-[#a0aec0] shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#0d0e0f,-8px_-8px_16px_#27282d] border-none animate-in fade-in-0 zoom-in-95",
  badge: "inline-flex items-center rounded-full border-none px-3 py-1 text-xs font-semibold transition-colors focus:outline-none shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#0d0e0f,-8px_-8px_16px_#27282d] bg-[#e0e5ec] dark:bg-[#1a1b1e] text-[#4a5568] dark:text-[#a0aec0]",
  popover: "z-50 w-72 rounded-2xl bg-[#e0e5ec] dark:bg-[#1a1b1e] p-4 text-[#4a5568] dark:text-[#a0aec0] shadow-[12px_12px_24px_#b8bcc2,-12px_-12px_24px_#ffffff] dark:shadow-[12px_12px_24px_#0d0e0f,-12px_-12px_24px_#27282d] border-none outline-none animate-in zoom-in-95",

  label: "text-sm font-semibold text-[#8892b0]",
  radio: {
      root: "grid gap-2",
      item: "aspect-square h-5 w-5 rounded-full bg-[#e0e5ec] dark:bg-[#1a1b1e] shadow-[inset_3px_3px_6px_#b8bcc2,inset_-3px_-3px_6px_#ffffff] dark:shadow-[inset_3px_3px_6px_#0d0e0f,inset_-3px_-3px_6px_#27282d] text-primary data-[state=checked]:shadow-[3px_3px_6px_#b8bcc2,-3px_-3px_6px_#ffffff] dark:data-[state=checked]:shadow-[3px_3px_6px_#0d0e0f,-3px_-3px_6px_#27282d] transition-all",
    },
  otp: {
      container: "flex items-center gap-3",
      slot: "relative flex h-12 w-12 items-center justify-center text-lg bg-[#e0e5ec] dark:bg-[#1a1b1e] rounded-xl shadow-[inset_3px_3px_6px_#b8bcc2,inset_-3px_-3px_6px_#ffffff] dark:shadow-[inset_3px_3px_6px_#0d0e0f,inset_-3px_-3px_6px_#27282d] text-[#2d3748] dark:text-[#f7fafc] focus-visible:z-10",
      slotActive: "z-10 shadow-[3px_3px_6px_#b8bcc2,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_#0d0e0f,-3px_-3px_6px_#27282d]",
      slotInactive: "shadow-[inset_3px_3px_6px_#b8bcc2,inset_-3px_-3px_6px_#ffffff] dark:shadow-[inset_3px_3px_6px_#0d0e0f,inset_-3px_-3px_6px_#27282d]",
    },
  toggle: {
      root: "inline-flex items-center justify-center rounded-xl bg-[#e0e5ec] dark:bg-[#1a1b1e] shadow-[5px_5px_10px_#b8bcc2,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#0d0e0f,-5px_-5px_10px_#27282d] text-[#2d3748] dark:text-[#f7fafc] font-semibold hover:shadow-[inset_2px_2px_5px_#b8bcc2,inset_-2px_-2px_5px_#ffffff] dark:hover:shadow-[inset_2px_2px_5px_#0d0e0f,inset_-2px_-2px_5px_#27282d] data-[state=on]:shadow-[inset_5px_5px_10px_#b8bcc2,inset_-5px_-5px_10px_#ffffff] dark:data-[state=on]:shadow-[inset_5px_5px_10px_#0d0e0f,inset_-5px_-5px_10px_#27282d] data-[state=on]:text-primary transition-all px-4 py-2"
    },
  toggleGroup: {
      root: "flex items-center justify-center gap-2 bg-[#e0e5ec] dark:bg-[#1a1b1e] p-2 rounded-2xl shadow-[inset_5px_5px_10px_#b8bcc2,inset_-5px_-5px_10px_#ffffff] dark:shadow-[inset_5px_5px_10px_#0d0e0f,inset_-5px_-5px_10px_#27282d] w-fit",
      item: "inline-flex items-center justify-center rounded-xl font-semibold bg-[#e0e5ec] dark:bg-[#1a1b1e] shadow-[3px_3px_6px_#b8bcc2,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_#0d0e0f,-3px_-3px_6px_#27282d] text-[#2d3748] dark:text-[#f7fafc] transition-all data-[state=on]:shadow-[inset_3px_3px_6px_#b8bcc2,inset_-3px_-3px_6px_#ffffff] dark:data-[state=on]:shadow-[inset_3px_3px_6px_#0d0e0f,inset_-3px_-3px_6px_#27282d] data-[state=on]:text-primary hover:shadow-[2px_2px_4px_#b8bcc2,-2px_-2px_4px_#ffffff] dark:hover:shadow-[2px_2px_4px_#0d0e0f,-2px_-2px_4px_#27282d] h-10 px-4"
    },
}
