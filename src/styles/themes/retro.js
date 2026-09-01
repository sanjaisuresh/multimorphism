export const retroTheme = {
  layout: {
    app: "h-screen w-full flex flex-col md:flex-row overflow-hidden bg-[#050505] text-primary transition-colors duration-500 font-mono",
    sidebar: {
      container: "h-full flex-col bg-[#0a0a0c] z-20 relative transition-all duration-300 border-r border-primary/30 shadow-[4px_0_20px_rgba(0,0,0,0.5)]",
      linkActive: "bg-primary/10 text-primary font-bold rounded-none border border-primary shadow-[0_0_15px_currentColor]",
      linkInactive: "text-gray-500 hover:text-primary rounded-none transition-all hover:bg-primary/5 hover:border hover:border-primary/50 hover:shadow-[0_0_10px_currentColor]"
    },
    header: "h-16 flex flex-shrink-0 items-center justify-between px-6 bg-[#0a0a0c] z-30 relative transition-colors duration-500 border-b border-primary/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)]",
    breadcrumb: "w-full bg-[#050505] flex items-center px-6 py-3 z-10 text-sm font-semibold text-primary/70 transition-colors duration-500 border-b border-primary/20 uppercase tracking-widest"
  },
  dashboard: {
    statIcon: "rounded-none bg-[#0a0a0c] border border-primary shadow-[0_0_10px_currentColor]",
    badge: "rounded-none bg-primary/20 text-primary border border-primary shadow-[0_0_8px_currentColor] uppercase text-xs font-bold",
    taskCircle: "w-3 h-3 rounded-none border border-primary shadow-[0_0_8px_currentColor]",
    tabContainer: "flex bg-[#0a0a0c] p-1 border border-primary/30",
    tabActive: "bg-primary/20 text-primary rounded-none border border-primary shadow-[0_0_10px_currentColor]",
    tabInactive: "text-gray-500 hover:text-primary rounded-none",
    txIcon: "w-10 h-10 rounded-none bg-[#0a0a0c] flex items-center justify-center text-primary border border-primary shadow-[0_0_10px_currentColor]",
    txRow: "border-b border-primary/20 hover:bg-primary/5 transition-all rounded-none",
    incomeItem: "flex flex-col p-4 bg-[#0a0a0c] border border-primary/40 hover:border-primary shadow-[0_0_10px_currentColor] text-primary transition-all rounded-none"
  },
  profile: {
    avatarWrapper: "bg-[#0a0a0c] rounded-none p-2 border-2 border-primary shadow-[0_0_20px_currentColor] text-primary",
    avatarInner: "border border-primary rounded-none",
    editBtn: "bg-[#0a0a0c] text-primary border border-primary shadow-[0_0_10px_currentColor] hover:bg-primary/20 hover:scale-105 rounded-none transition-all uppercase tracking-wider",
    tabsList: "mb-6 bg-[#0a0a0c] p-1.5 w-full justify-start overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border-b border-primary/30 rounded-none",
    socialLink: "bg-[#0a0a0c] rounded-none border border-primary text-primary shadow-[0_0_10px_currentColor] hover:bg-primary/20 transition-all hover:-translate-y-1",
    connectionCount: "bg-[#050505] border border-primary/50 text-primary rounded-none",
    connectionItem: "bg-[#0a0a0c] rounded-none p-4 border border-primary/30 hover:border-primary text-primary hover:shadow-[0_0_15px_currentColor] transition-all duration-300",
    projectIcon: "bg-[#0a0a0c] rounded-none text-primary border border-primary shadow-[0_0_8px_currentColor]",
    progressTrack: "bg-[#050505] rounded-none overflow-hidden border border-primary/40",
    avatarBorder: "border-primary",
    newProjectCard: "border border-dashed border-primary/50 bg-[#0a0a0c] rounded-none min-h-[280px] hover:border-primary hover:shadow-[0_0_15px_currentColor] text-primary transition-all cursor-pointer flex flex-col items-center justify-center uppercase tracking-widest"
  },
  settings: {
    btnActive: "bg-primary/10 text-primary border-2 border-primary shadow-[0_0_15px_currentColor] rounded-none uppercase tracking-wider",
    btnInactive: "bg-[#0a0a0c] text-primary/50 border border-primary/30 hover:border-primary hover:text-primary hover:shadow-[0_0_10px_currentColor] rounded-none uppercase tracking-wider",
    colorActive: "border-2 border-white scale-110 shadow-[0_0_20px_currentColor] rounded-none",
    colorInactive: "border border-primary/50 rounded-none hover:scale-110 hover:border-primary hover:shadow-[0_0_10px_currentColor]",
    switchTrackActive: "bg-primary/20 border border-primary shadow-[0_0_10px_currentColor] rounded-none",
    switchTrackInactive: "bg-[#0a0a0c] border border-primary/30 rounded-none",
    fontActive: "bg-primary/10 text-primary font-bold border-l-4 border-primary shadow-[0_0_10px_currentColor] px-4 rounded-none uppercase tracking-widest",
    fontInactive: "bg-[#0a0a0c] text-primary/50 font-medium hover:text-primary hover:border-l-4 hover:border-primary/50 px-4 rounded-none uppercase tracking-widest",
    sliderTrack: "bg-[#050505] border border-primary shadow-[0_0_5px_currentColor] rounded-none h-4 accent-primary"
  },
  avatar: {
    root: "relative flex h-10 w-10 shrink-0 overflow-hidden bg-[#0a0a0c] border-2 border-primary text-primary shadow-[0_0_10px_currentColor] rounded-none",
    image: "aspect-square h-full w-full object-cover filter contrast-125 sepia-[.5] hue-rotate-180",
    fallback: "flex h-full w-full items-center justify-center bg-[#050505] text-primary font-bold text-sm uppercase"
  },
  tabs: {
    list: "inline-flex items-center justify-center bg-[#0a0a0c] p-1 text-primary/50 border border-primary/30 rounded-none",
    trigger: "inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-bold transition-all data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:border data-[state=active]:border-primary data-[state=active]:shadow-[0_0_10px_currentColor] uppercase tracking-wider rounded-none"
  },
  typography: {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-primary uppercase drop-shadow-[0_0_8px_currentColor]",
    h2: "scroll-m-20 pb-2 text-3xl font-bold tracking-widest text-primary uppercase border-b border-primary/30 drop-shadow-[0_0_5px_currentColor]",
    h3: "scroll-m-20 text-2xl font-bold tracking-wider text-primary uppercase",
    p: "leading-7 text-primary/80 font-mono"
  },
  card: "bg-[#0a0a0c] border border-primary/40 shadow-[0_0_10px_rgba(0,0,0,0.8)] p-6 transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px_currentColor] text-primary rounded-none",
  button: {
    base: "py-2 px-4 text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-widest rounded-none",
    primary: "bg-primary text-black shadow-[0_0_15px_currentColor] hover:bg-primary/80 hover:scale-105",
    secondary: "bg-[#0a0a0c] text-primary border border-primary shadow-[0_0_10px_currentColor] hover:bg-primary/20 hover:scale-105",
    outline: "bg-transparent text-primary border-2 border-primary hover:bg-primary/10 hover:shadow-[0_0_15px_currentColor]"
  },
  input: "w-full bg-[#09090b] rounded-none border border-cyan-500/50 outline-none focus:ring-2 focus:ring-cyan-400 shadow-[inset_0_0_10px_rgba(6,182,212,0.1)] text-cyan-50 placeholder-cyan-500/50 transition-all font-mono",
  switch: {
    root: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-none border border-cyan-500/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-cyan-500 data-[state=unchecked]:bg-[#131316] data-[state=checked]:shadow-[0_0_15px_rgba(6,182,212,0.5)]",
    thumb: "pointer-events-none block h-5 w-5 rounded-none bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
  },
  checkbox: {
    root: "peer h-5 w-5 shrink-0 rounded-none border border-cyan-500/50 bg-[#131316] shadow-[inset_0_0_5px_rgba(6,182,212,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-cyan-500 data-[state=checked]:text-[#09090b] data-[state=checked]:shadow-[0_0_10px_rgba(6,182,212,0.8)] transition-all",
    icon: "h-4 w-4"
  },
  slider: {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-2 w-full grow overflow-hidden rounded-none bg-[#131316] border border-cyan-500/30",
    range: "absolute h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]",
    thumb: "block h-5 w-5 rounded-none border border-cyan-400 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  },
  tooltip: "z-50 overflow-hidden rounded-none bg-[#09090b] px-3 py-1.5 text-sm font-mono text-cyan-400 border border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] animate-in fade-in-0 zoom-in-95",
  badge: "inline-flex items-center rounded-none border border-cyan-400 px-2.5 py-0.5 text-xs font-mono font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)] bg-cyan-900/50 text-cyan-400 uppercase",
  popover: "z-50 w-72 rounded-none bg-[#09090b] p-4 text-cyan-50 border border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.3)] outline-none animate-in zoom-in-95",

  label: "text-sm font-bold text-[#FF8C00] uppercase tracking-wider drop-shadow-[1px_1px_0px_#000]",
  radio: {
      root: "grid gap-2",
      item: "aspect-square h-5 w-5 rounded-none border-2 border-[#FF8C00] bg-black text-[#FF8C00] shadow-[0_0_5px_#FF8C00] data-[state=checked]:bg-[#FF8C00] data-[state=checked]:text-black data-[state=checked]:shadow-[0_0_15px_#FF8C00] transition-all",
    },
  otp: {
      container: "flex items-center gap-2",
      slot: "relative flex h-12 w-12 items-center justify-center text-lg font-bold border-2 border-[#FF8C00] bg-black text-[#FF8C00] shadow-[0_0_5px_#FF8C00] focus-visible:z-10 focus-visible:shadow-[0_0_15px_#FF8C00]",
      slotActive: "z-10 shadow-[0_0_15px_#FF8C00] bg-[#FF8C00]/20",
      slotInactive: "bg-black",
    },
  toggle: {
      root: "inline-flex items-center justify-center border-2 border-[#FF8C00] bg-black text-[#FF8C00] font-bold uppercase tracking-wider shadow-[0_0_10px_#FF8C00] hover:bg-[#FF8C00]/20 data-[state=on]:bg-[#FF8C00] data-[state=on]:text-black data-[state=on]:shadow-[0_0_20px_#FF8C00] transition-all px-4 py-2"
    },
  toggleGroup: {
      root: "flex items-center justify-center gap-1 bg-black border-2 border-[#FF8C00] shadow-[0_0_10px_#FF8C00] p-1 w-fit",
      item: "inline-flex items-center justify-center font-bold uppercase tracking-wider bg-black text-[#FF8C00] transition-all data-[state=on]:bg-[#FF8C00] data-[state=on]:text-black data-[state=on]:shadow-[0_0_10px_#FF8C00] hover:bg-[#FF8C00]/20 h-9 px-3"
    },
}
