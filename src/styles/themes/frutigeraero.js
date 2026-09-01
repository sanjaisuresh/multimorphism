export const frutigeraeroTheme = {
  layout: {
    app: "h-screen w-full flex flex-col md:flex-row overflow-hidden bg-gradient-to-br from-[#E0F2FE] via-[#F0F9FF] to-[#DDF1FF] dark:from-[#0B1A28] dark:via-[#112233] dark:to-[#07131D] text-[#033A52] dark:text-[#E0F2FE] transition-colors duration-500 font-sans tracking-normal",
    sidebar: {
      container: "h-full flex-col bg-white/40 dark:bg-black/40 backdrop-blur-md z-20 relative transition-all duration-300 border-r border-white/80 dark:border-white/10 shadow-[4px_0_20px_rgba(0,0,0,0.05)]",
      linkActive: "bg-gradient-to-b from-primary-light to-primary text-white font-bold rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),0_4px_8px_rgba(0,0,0,0.2)] border border-primary-dark/30",
      linkInactive: "text-[#033A52]/70 dark:text-[#E0F2FE]/70 hover:text-primary-dark dark:hover:text-primary-lighter rounded-full transition-all hover:bg-white/50 dark:hover:bg-white/5 shadow-inner"
    },
    header: "h-16 flex flex-shrink-0 items-center justify-between px-6 bg-gradient-to-b from-white/80 to-white/30 dark:from-black/60 dark:to-black/20 backdrop-blur-md z-30 relative transition-colors duration-500 border-b border-white/60 dark:border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.05)]",
    breadcrumb: "w-full bg-transparent flex items-center px-6 py-3 z-10 text-sm font-semibold text-[#033A52]/60 dark:text-[#E0F2FE]/60 transition-colors duration-500 uppercase tracking-widest"
  },
  dashboard: {
    statIcon: "rounded-full bg-gradient-to-b from-white to-[#E0F2FE] dark:from-[#112233] dark:to-[#0B1A28] text-primary p-3 shadow-[inset_0_2px_5px_rgba(255,255,255,0.8),0_4px_10px_rgba(0,0,0,0.1)] border border-white/50 dark:border-white/5",
    badge: "rounded-full bg-gradient-to-b from-primary-light to-primary text-white px-3 py-1 text-xs font-bold shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] border border-primary-dark/20",
    taskCircle: "w-4 h-4 rounded-full bg-gradient-to-br from-white to-primary shadow-[inset_0_2px_2px_rgba(255,255,255,0.9),0_2px_4px_rgba(0,0,0,0.2)] border border-primary-dark/30",
    tabContainer: "flex bg-white/40 dark:bg-black/40 backdrop-blur-md p-1.5 rounded-full border border-white/60 dark:border-white/10 shadow-inner",
    tabActive: "bg-gradient-to-b from-white to-[#F0F9FF] dark:from-[#1A2E44] dark:to-[#112233] text-primary-dark dark:text-primary-lighter rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.15)] font-bold border border-white/80 dark:border-white/5",
    tabInactive: "text-[#033A52]/70 dark:text-[#E0F2FE]/70 hover:text-primary-dark dark:hover:text-primary-lighter rounded-full",
    txIcon: "w-12 h-12 rounded-full bg-gradient-to-br from-white to-[#DDF1FF] dark:from-[#1A2E44] dark:to-[#0B1A28] flex items-center justify-center text-primary shadow-[inset_0_2px_5px_rgba(255,255,255,0.8),0_4px_10px_rgba(0,0,0,0.1)] border border-white/50 dark:border-white/5",
    txRow: "border-b border-white/40 dark:border-white/5 last:border-0 hover:bg-white/50 dark:hover:bg-white/5 transition-all rounded-[2rem] px-4",
    incomeItem: "flex flex-col p-4 bg-gradient-to-b from-white/80 to-white/40 dark:from-black/40 dark:to-black/20 backdrop-blur-md rounded-[2.5rem] border border-white/60 dark:border-white/10 text-[#033A52] dark:text-[#E0F2FE] transition-all hover:scale-[1.02] shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),0_8px_20px_rgba(0,0,0,0.05)]"
  },
  profile: {
    avatarWrapper: "bg-gradient-to-b from-white to-[#E0F2FE] dark:from-[#112233] dark:to-[#0B1A28] rounded-full p-1.5 shadow-[inset_0_2px_5px_rgba(255,255,255,0.8),0_8px_20px_rgba(0,0,0,0.1)] border border-white/50 dark:border-white/5",
    avatarInner: "border-2 border-white dark:border-white/20 rounded-full",
    editBtn: "bg-gradient-to-b from-primary-light to-primary text-white hover:from-primary hover:to-primary-dark rounded-full transition-all font-bold px-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),0_4px_8px_rgba(0,0,0,0.2)] border border-primary-dark/30",
    tabsList: "mb-6 bg-transparent w-full justify-start overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border-b-2 border-white/40 dark:border-white/10 rounded-none",
    socialLink: "bg-gradient-to-b from-white/80 to-white/40 dark:from-black/40 dark:to-black/20 rounded-full text-[#033A52] dark:text-[#E0F2FE] hover:text-primary transition-all shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),0_2px_5px_rgba(0,0,0,0.1)] hover:-translate-y-1 border border-white/60 dark:border-white/10",
    connectionCount: "bg-gradient-to-b from-primary-light to-primary text-white rounded-full font-bold px-3 shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)]",
    connectionItem: "bg-gradient-to-b from-white/80 to-white/40 dark:from-black/40 dark:to-black/20 backdrop-blur-md rounded-[2.5rem] p-4 border border-white/60 dark:border-white/10 hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),0_8px_20px_rgba(0,0,0,0.1)] transition-all duration-300",
    projectIcon: "bg-gradient-to-b from-white to-[#DDF1FF] dark:from-[#112233] dark:to-[#0B1A28] rounded-[2rem] text-primary p-2 shadow-[inset_0_2px_5px_rgba(255,255,255,0.8),0_4px_10px_rgba(0,0,0,0.1)] border border-white/50 dark:border-white/5",
    progressTrack: "bg-black/10 dark:bg-white/10 rounded-full overflow-hidden h-3 shadow-inner",
    avatarBorder: "border-transparent",
    newProjectCard: "border-2 border-dashed border-[#033A52]/20 dark:border-[#E0F2FE]/20 bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-[2.5rem] min-h-[280px] hover:bg-white/40 dark:hover:bg-white/5 text-[#033A52]/60 dark:text-[#E0F2FE]/60 transition-all cursor-pointer flex flex-col items-center justify-center font-bold shadow-inner"
  },
  settings: {
    btnActive: "bg-gradient-to-b from-primary-light to-primary text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),0_4px_8px_rgba(0,0,0,0.2)] rounded-[2rem] font-bold border border-primary-dark/30",
    btnInactive: "bg-white/40 dark:bg-black/40 text-[#033A52]/70 dark:text-[#E0F2FE]/70 hover:bg-white/60 dark:hover:bg-white/10 rounded-[2rem] font-medium shadow-inner border border-white/40 dark:border-white/5",
    colorActive: "ring-4 ring-white/50 dark:ring-white/20 ring-offset-2 ring-offset-transparent scale-110 shadow-[0_4px_15px_currentColor]",
    colorInactive: "hover:scale-110 transition-transform shadow-md",
    switchTrackActive: "bg-gradient-to-b from-primary-light to-primary rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] border border-primary-dark/20",
    switchTrackInactive: "bg-black/20 dark:bg-white/20 rounded-full shadow-inner",
    fontActive: "bg-gradient-to-b from-white to-[#F0F9FF] dark:from-[#1A2E44] dark:to-[#112233] text-primary-dark dark:text-primary-lighter font-bold rounded-[2rem] px-5 shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-white/80 dark:border-white/5",
    fontInactive: "bg-transparent text-[#033A52]/70 dark:text-[#E0F2FE]/70 font-medium hover:bg-white/40 dark:hover:bg-white/5 rounded-[2rem] px-5",
    sliderTrack: "bg-black/10 dark:bg-white/20 rounded-full h-3 shadow-inner accent-primary"
  },
  avatar: {
    root: "relative flex h-10 w-10 shrink-0 overflow-hidden bg-gradient-to-b from-white to-[#E0F2FE] dark:from-[#112233] dark:to-[#0B1A28] rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_2px_5px_rgba(0,0,0,0.1)] border border-white/50 dark:border-white/5",
    image: "aspect-square h-full w-full object-cover",
    fallback: "flex h-full w-full items-center justify-center bg-transparent text-primary-dark dark:text-primary-lighter font-bold text-sm"
  },
  tabs: {
    list: "inline-flex items-center justify-center bg-white/40 dark:bg-black/40 backdrop-blur-md p-1.5 rounded-full border border-white/60 dark:border-white/10 shadow-inner",
    trigger: "inline-flex items-center justify-center whitespace-nowrap px-6 py-2 text-sm font-bold transition-all data-[state=active]:bg-gradient-to-b data-[state=active]:from-white data-[state=active]:to-[#F0F9FF] dark:data-[state=active]:from-[#1A2E44] dark:data-[state=active]:to-[#112233] data-[state=active]:text-primary-dark dark:data-[state=active]:text-primary-lighter data-[state=active]:shadow-[0_2px_8px_rgba(0,0,0,0.15)] data-[state=active]:border data-[state=active]:border-white/80 dark:data-[state=active]:border-white/5 rounded-full"
  },
  typography: {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-[#033A52] dark:text-[#E0F2FE] drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)] dark:drop-shadow-none",
    h2: "scroll-m-20 pb-2 text-3xl font-bold tracking-tight text-[#033A52] dark:text-[#E0F2FE] drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] dark:drop-shadow-none",
    h3: "scroll-m-20 text-2xl font-bold tracking-tight text-[#033A52] dark:text-[#E0F2FE]",
    p: "leading-7 text-[#033A52]/80 dark:text-[#E0F2FE]/80 font-medium"
  },
  card: "bg-gradient-to-b from-white/90 to-white/60 dark:from-[#112233]/90 dark:to-[#0B1A28]/60 backdrop-blur-xl rounded-[2.5rem] shadow-[inset_0_2px_6px_rgba(255,255,255,0.7),0_8px_25px_rgba(0,0,0,0.08)] border border-white/80 dark:border-white/10 p-6 transition-all duration-300 hover:shadow-[inset_0_2px_6px_rgba(255,255,255,0.8),0_12px_30px_rgba(0,0,0,0.12)]",
  button: {
    base: "py-2.5 px-6 text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 rounded-full",
    primary: "bg-gradient-to-b from-primary-light to-primary text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),0_6px_12px_rgba(0,0,0,0.15)] hover:from-primary hover:to-primary-dark hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),0_8px_16px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 border border-primary-dark/30",
    secondary: "bg-gradient-to-b from-white to-[#E0F2FE] dark:from-[#1A2E44] dark:to-[#112233] text-primary-dark dark:text-primary-lighter shadow-[inset_0_2px_5px_rgba(255,255,255,0.8),0_4px_10px_rgba(0,0,0,0.05)] border border-white/50 dark:border-white/5 hover:scale-105",
    outline: "bg-transparent text-primary-dark dark:text-primary-lighter border-2 border-[#033A52]/20 dark:border-[#E0F2FE]/20 hover:bg-white/40 dark:hover:bg-white/10 shadow-inner"
  },
  input: "w-full bg-gradient-to-b from-white to-[#F0F8FF] dark:from-[#112233] dark:to-[#0A1118] rounded-xl border border-white/50 dark:border-white/10 outline-none focus:ring-2 focus:ring-[#4AA5D4] shadow-[inset_0_2px_5px_rgba(0,0,0,0.1),0_1px_0_rgba(255,255,255,0.8)] text-[#033A52] dark:text-[#E0F2FE] placeholder-gray-400 transition-all",
  switch: {
    root: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-black/10 dark:border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4AA5D4] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gradient-to-b data-[state=checked]:from-[#4AA5D4] data-[state=checked]:to-[#2884B3] data-[state=unchecked]:bg-gradient-to-b data-[state=unchecked]:from-gray-200 data-[state=unchecked]:to-gray-300 shadow-[inset_0_2px_5px_rgba(0,0,0,0.2)]",
    thumb: "pointer-events-none block h-5 w-5 rounded-full bg-gradient-to-b from-white to-[#E0F2FE] shadow-[0_2px_5px_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.9)] ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
  },
  checkbox: {
    root: "peer h-5 w-5 shrink-0 rounded-md border border-black/20 dark:border-white/20 bg-gradient-to-b from-white to-[#E0F2FE] dark:from-[#1A2E44] dark:to-[#0A1118] shadow-[inset_0_2px_5px_rgba(0,0,0,0.1),0_1px_0_rgba(255,255,255,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4AA5D4] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gradient-to-b data-[state=checked]:from-[#4AA5D4] data-[state=checked]:to-[#2884B3] data-[state=checked]:text-white transition-all",
    icon: "h-4 w-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]"
  },
  slider: {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-2 w-full grow overflow-hidden rounded-full bg-gradient-to-b from-gray-300 to-gray-200 dark:from-gray-800 dark:to-gray-700 shadow-[inset_0_1px_3px_rgba(0,0,0,0.2)]",
    range: "absolute h-full bg-gradient-to-b from-[#4AA5D4] to-[#2884B3]",
    thumb: "block h-5 w-5 rounded-full border border-black/10 bg-gradient-to-b from-white to-[#E0F2FE] shadow-[0_2px_5px_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.9)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4AA5D4] disabled:pointer-events-none disabled:opacity-50"
  },
  tooltip: "z-50 overflow-hidden rounded-xl bg-gradient-to-b from-white/90 to-[#E0F2FE]/90 dark:from-[#1A2E44]/90 dark:to-[#0A1118]/90 backdrop-blur-md px-3 py-1.5 text-sm font-bold text-[#033A52] dark:text-[#E0F2FE] border border-white/50 dark:border-white/10 shadow-[0_8px_16px_rgba(0,0,0,0.1),inset_0_2px_0_rgba(255,255,255,0.5)] animate-in fade-in-0 zoom-in-95",
  badge: "inline-flex items-center rounded-full border border-white/50 px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-[#4AA5D4] shadow-[0_2px_4px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] bg-gradient-to-b from-[#4AA5D4] to-[#2884B3] text-white",
  popover: "z-50 w-72 rounded-2xl bg-gradient-to-b from-white/95 to-[#E0F2FE]/95 dark:from-[#1A2E44]/95 dark:to-[#0A1118]/95 backdrop-blur-xl p-4 text-[#033A52] dark:text-[#E0F2FE] border border-white/50 dark:border-white/10 shadow-[0_12px_24px_rgba(0,0,0,0.15),inset_0_2px_0_rgba(255,255,255,0.5)] outline-none animate-in zoom-in-95",

  label: "text-sm font-semibold text-[#033A52]/70 dark:text-[#E0F2FE]/70 shadow-white drop-shadow-sm",
  radio: {
      root: "grid gap-2",
      item: "aspect-square h-5 w-5 rounded-full border border-white/50 bg-gradient-to-b from-white/60 to-white/10 dark:from-white/20 dark:to-black/20 backdrop-blur-md shadow-[inset_0_1px_3px_rgba(255,255,255,0.8),0_2px_5px_rgba(0,0,0,0.1)] text-[#0BA5E9] data-[state=checked]:from-[#0BA5E9]/50 data-[state=checked]:to-[#0284C7]/50 data-[state=checked]:text-white transition-all",
    },
  otp: {
      container: "flex items-center gap-2",
      slot: "relative flex h-12 w-12 items-center justify-center text-lg font-bold border border-white/50 bg-gradient-to-b from-white/40 to-white/10 dark:from-white/10 dark:to-black/30 backdrop-blur-lg rounded-2xl shadow-[inset_0_2px_5px_rgba(255,255,255,0.9),0_4px_10px_rgba(0,0,0,0.05)] text-[#033A52] dark:text-[#E0F2FE] focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-[#0BA5E9]",
      slotActive: "z-10 shadow-[inset_0_2px_5px_rgba(255,255,255,0.9),0_0_15px_rgba(11,165,233,0.4)] border-[#0BA5E9]/50",
      slotInactive: "",
    },
  toggle: {
      root: "inline-flex items-center justify-center rounded-3xl border border-white/60 bg-gradient-to-b from-white/50 to-white/10 dark:from-white/20 dark:to-white/5 backdrop-blur-md shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_4px_8px_rgba(0,0,0,0.1)] font-bold text-[#033A52] dark:text-[#E0F2FE] hover:brightness-110 data-[state=on]:from-[#0BA5E9] data-[state=on]:to-[#0284C7] data-[state=on]:text-white data-[state=on]:shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_4px_10px_rgba(11,165,233,0.4)] transition-all px-5 py-2"
    },
  toggleGroup: {
      root: "flex items-center justify-center gap-1 border border-white/30 bg-black/5 dark:bg-white/5 backdrop-blur-md p-1.5 rounded-3xl shadow-inner w-fit",
      item: "inline-flex items-center justify-center rounded-2xl font-semibold text-[#033A52]/70 dark:text-[#E0F2FE]/70 transition-all data-[state=on]:bg-gradient-to-b data-[state=on]:from-white/80 data-[state=on]:to-white/30 dark:data-[state=on]:from-white/30 dark:data-[state=on]:to-white/10 data-[state=on]:text-[#033A52] dark:data-[state=on]:text-white data-[state=on]:shadow-[inset_0_2px_3px_rgba(255,255,255,0.9),0_2px_5px_rgba(0,0,0,0.1)] hover:bg-white/20 h-9 px-4"
    },
}
