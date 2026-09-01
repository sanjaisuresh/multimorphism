export const neobrutalismTheme = {
  layout: {
    app: "h-screen w-full flex flex-col md:flex-row overflow-hidden bg-primary font-mono text-black",
    sidebar: {
      container: "h-full flex-col bg-white border-r-4 border-black z-20 relative transition-all duration-300",
      linkActive: "bg-primary border-2 border-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
      linkInactive: "text-black border-2 border-transparent hover:bg-black hover:text-white"
    },
    header: "h-16 flex flex-shrink-0 items-center justify-between px-6 bg-white border-b-4 border-black shadow-[0_4px_0_0_rgba(0,0,0,1)] z-30 relative transition-colors duration-300",
    breadcrumb: "w-full bg-white border-b-4 border-black flex items-center px-6 py-3 shadow-[0_4px_0_0_rgba(0,0,0,1)] z-10 text-sm font-bold text-black uppercase transition-colors duration-300"
  },
  dashboard: {
    statIcon: "rounded-none border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-white",
    badge: "rounded-none border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-white text-black",
    taskCircle: "w-3 h-3 rounded-none border-2 border-black",
    tabContainer: "flex bg-primary p-1 border-2 border-black",
    tabActive: "bg-white border-2 border-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
    tabInactive: "text-black hover:bg-black hover:text-white border-2 border-transparent",
    txIcon: "w-10 h-10 bg-white border-2 border-black flex items-center justify-center text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
    txRow: "border-b-2 border-black last:border-0 hover:bg-primary transition-colors",
    incomeItem: "flex flex-col bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
  },
  profile: {
    avatarWrapper: "bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-4 border-black",
    avatarInner: "bg-white border-4 border-black",
    editBtn: "shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border-2 border-black hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none bg-primary text-black",
    tabsList: "mb-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-4 border-black p-1.5 w-full justify-start overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
    socialLink: "bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border-2 border-black hover:bg-primary hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black",
    connectionCount: "bg-primary border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-black",
    connectionItem: "bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200",
    projectIcon: "border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-white text-black",
    progressTrack: "bg-white border-2 border-black",
    avatarBorder: "border-black border-2",
    newProjectCard: "border-4 border-black border-dashed bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] min-h-[280px]"
  },
  settings: {
    btnActive: "bg-primary border-4 border-black text-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    btnInactive: "bg-white border-2 border-black text-black hover:bg-black hover:text-white transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
    colorActive: "border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] scale-110",
    colorInactive: "border-2 border-black hover:scale-110 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
    switchTrackActive: "bg-primary border-2 border-black",
    switchTrackInactive: "bg-white border-2 border-black",
    fontActive: "bg-primary text-black font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-4",
    fontInactive: "bg-white text-black font-medium hover:bg-black hover:text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] px-4",
    sliderTrack: "bg-white border-2 border-black accent-black h-4 rounded-none"
  },
  avatar: {
    root: "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border-2 border-black bg-white",
    image: "aspect-square h-full w-full object-cover",
    fallback: "flex h-full w-full items-center justify-center rounded-none bg-white text-black font-semibold text-sm border-2 border-black"
  },
  tabs: {
    list: "inline-flex items-center justify-center rounded-none bg-primary p-1 text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    trigger: "inline-flex items-center justify-center whitespace-nowrap rounded-none px-3 py-1.5 text-sm font-bold transition-all data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-2 data-[state=active]:border-black border-2 border-transparent hover:bg-black hover:text-white"
  },
  typography: {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-black uppercase",
    h2: "scroll-m-20 border-b-4 border-black pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0 text-black uppercase",
    h3: "scroll-m-20 text-2xl font-bold tracking-tight text-black uppercase",
    p: "leading-7 text-black font-medium"
  },
  card: "bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-none p-6 transition-all duration-300",
  button: {
    base: "py-2 px-4 text-sm font-bold rounded-none border-2 border-black transition-all duration-200 flex items-center justify-center gap-2 uppercase tracking-wider",
    primary: "bg-primary text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none",
    secondary: "bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none",
    outline: "bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none"
  },
  input: "w-full bg-white rounded-none border-4 border-black outline-none focus:ring-4 focus:ring-primary shadow-[4px_4px_0_0_#000] text-black placeholder-gray-500 transition-all focus:-translate-y-1 focus:translate-x-1 focus:shadow-[6px_6px_0_0_#000]",
  switch: {
    root: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-none border-4 border-black transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-gray-200 shadow-[2px_2px_0_0_#000]",
    thumb: "pointer-events-none block h-5 w-5 rounded-none bg-white border-4 border-black transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
  },
  checkbox: {
    root: "peer h-6 w-6 shrink-0 rounded-none border-4 border-black bg-white shadow-[4px_4px_0_0_#000] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-black hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0_0_#000] transition-all",
    icon: "h-5 w-5 stroke-[4px]"
  },
  slider: {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-4 w-full grow overflow-hidden rounded-none border-4 border-black bg-white shadow-[2px_2px_0_0_#000]",
    range: "absolute h-full bg-primary",
    thumb: "block h-6 w-6 rounded-none border-4 border-black bg-primary shadow-[4px_4px_0_0_#000] transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0_0_#000]"
  },
  tooltip: "z-50 overflow-hidden rounded-none bg-white px-3 py-1.5 text-sm font-bold text-black border-4 border-black shadow-[4px_4px_0_0_#000] animate-in fade-in-0 zoom-in-95 uppercase tracking-wider",
  badge: "inline-flex items-center rounded-none border-4 border-black px-2.5 py-0.5 text-xs font-black uppercase transition-colors focus:outline-none focus:ring-4 focus:ring-primary shadow-[4px_4px_0_0_#000] bg-primary text-black",
  popover: "z-50 w-72 rounded-none bg-white p-4 text-black border-4 border-black shadow-[8px_8px_0_0_#000] outline-none animate-in zoom-in-95",

  label: "text-sm font-black text-black uppercase tracking-wider",
  radio: {
      root: "grid gap-2",
      item: "aspect-square h-6 w-6 rounded-full border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black data-[state=checked]:bg-black data-[state=checked]:text-white transition-all hover:-translate-y-1 hover:translate-x-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
    },
  otp: {
      container: "flex items-center gap-2",
      slot: "relative flex h-14 w-12 items-center justify-center text-xl font-black border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] m-1 focus-visible:z-10",
      slotActive: "z-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -translate-y-1 bg-yellow-300",
      slotInactive: "bg-white",
    },
  toggle: {
      root: "inline-flex items-center justify-center border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-black uppercase hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] data-[state=on]:bg-black data-[state=on]:text-white data-[state=on]:translate-y-[2px] data-[state=on]:translate-x-[2px] data-[state=on]:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all px-4 py-2"
    },
  toggleGroup: {
      root: "flex items-center justify-center gap-2 bg-[#ff5e5e] p-2 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-fit",
      item: "inline-flex items-center justify-center font-black uppercase bg-white border-[3px] border-black text-black transition-all data-[state=on]:bg-black data-[state=on]:text-white hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] data-[state=on]:translate-y-0 data-[state=on]:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] h-10 px-4"
    },
}
