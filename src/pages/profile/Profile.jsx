import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import { Card } from '@/components/ui/card'
import { TypographyH2, TypographyH3, TypographyP } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MapPin, Mail, Globe, Github, Linkedin, Edit2, Users, Briefcase, Plus } from 'lucide-react'
import { useTheme } from '@/providers/ThemeProvider'

const Profile = observer(() => {
  const { profileStore, layoutStore } = useStore()
  const { user, connections, projects } = profileStore
  const { styles } = useTheme()
  const pStyles = styles.profile || {}

  return (
    <div className={`p-6 md:p-8 flex flex-col gap-6 mx-auto w-full animate-fade-in ${layoutStore.themeStretch ? 'max-w-none' : 'max-w-5xl'}`}>
      {/* Cover & Header Section */}
      <Card className="p-0 overflow-hidden relative border-0">
        <div className="h-48 md:h-64 w-full relative">
          <img src={user.cover} alt="Cover" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <Button variant="secondary" size="sm" className="absolute top-4 right-4 bg-white/20 backdrop-blur border-0 hover:bg-white/40 text-white shadow-none">
            <Edit2 size={16} className="mr-2" /> Edit Cover
          </Button>
        </div>
        
        <div className="px-6 md:px-10 pb-8 flex flex-col md:flex-row gap-6 relative">
          {/* Avatar */}
          <div className={`-mt-16 relative z-10 w-32 h-32 rounded-full p-2 flex-shrink-0 ${pStyles.avatarWrapper}`}>
            <div className={`w-full h-full rounded-full overflow-hidden flex items-center justify-center ${pStyles.avatarInner}`}>
              {user.avatar?.startsWith('http') ? (
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-4xl font-bold text-primary">{user.avatar}</span>
              )}
            </div>
            <button className={`absolute bottom-1 right-1 w-8 h-8 rounded-full flex items-center justify-center transition-transform ${pStyles.editBtn}`}
                    style={!pStyles.editBtn.includes('bg-') ? { backgroundColor: 'var(--primary-default)', color: 'white' } : {}}>
              <Edit2 size={14} />
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between flex-1 mt-4 md:mt-0 gap-4">
            <div>
              <TypographyH2 className="border-b-0 pb-0 text-3xl mb-1">{user.name}</TypographyH2>
              <TypographyP className="font-medium text-primary">{user.role}</TypographyP>
            </div>
            <div className="flex gap-3">
              <Button className="shadow-clay-primary"><Plus size={16} className="mr-2"/> Follow</Button>
              <Button variant="outline" className="shadow-clay-base hover:shadow-clay-inner">Message</Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Main Content Tabs */}
      <Tabs defaultValue="about" className="w-full mt-2">
        <TabsList className={pStyles.tabsList}>
          <TabsTrigger value="about" className="rounded-xl px-6 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:font-bold transition-all">About</TabsTrigger>
          <TabsTrigger value="connections" className="rounded-xl px-6 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:font-bold transition-all">Connections</TabsTrigger>
          <TabsTrigger value="projects" className="rounded-xl px-6 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:font-bold transition-all">Projects</TabsTrigger>
        </TabsList>
        
        {/* About Tab */}
        <TabsContent value="about" className="outline-none">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <TypographyH3 className="mb-4">About Me</TypographyH3>
              <TypographyP>{user.about}</TypographyP>
              <TypographyP className="mt-4">
                I specialize in front-end development, specifically focusing on complex state management, 
                animations, and modern design systems to bring UIs to life.
              </TypographyP>
            </Card>
            <Card className="flex flex-col gap-5">
              <TypographyH3>Details</TypographyH3>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin size={18} className="text-primary" />
                <span className="font-medium">{user.location}</span>
              </div>

              <div className="h-px w-full bg-gray-200 dark:bg-white/10 my-2 mt-4" />
              
              <TypographyH3 className="text-lg">Social</TypographyH3>
              <div className="flex gap-4">
                <a href={user.socials.github} className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${pStyles.socialLink}`}
                   style={!pStyles.socialLink.includes('text-') ? { color: 'var(--text-dark)' } : {}}>
                  <Github size={20} />
                </a>
                <a href={`mailto:${user.email}`} className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${pStyles.socialLink}`}
                   style={!pStyles.socialLink.includes('text-') ? { color: '#EA4335' } : {}}>
                  <Mail size={20} />
                </a>
                <a href={user.socials.linkedin} className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${pStyles.socialLink}`}
                   style={!pStyles.socialLink.includes('text-') ? { color: '#0A66C2' } : {}}>
                  <Linkedin size={20} />
                </a>
              </div>
            </Card>
          </div>
        </TabsContent>
        
        {/* Connections Tab */}
        <TabsContent value="connections" className="outline-none">
          <Card>
            <div className="flex items-center justify-between mb-6">
              <TypographyH3>Connections</TypographyH3>
              <span className={`text-sm font-semibold px-3 py-1 rounded-full ${pStyles.connectionCount}`} style={!pStyles.connectionCount.includes('text-') ? { color: 'var(--primary-default)' } : {}}>{connections.length} people</span>
            </div>
            <div className="flex flex-col items-center justify-center p-10 text-center border-2 border-dashed border-gray-200 dark:border-white/10 rounded-3xl mt-4">
              <Users size={48} className="text-gray-400 mb-4" />
              <TypographyH3 className="mb-2 text-xl">No connections yet</TypographyH3>
              <TypographyP className="mb-6 max-w-sm mx-auto text-gray-500">Connect with other developers to share knowledge, collaborate on open source, and build amazing UI.</TypographyP>
              <Button className="shadow-clay-primary"><Plus size={16} className="mr-2"/> Find Connections</Button>
            </div>
          </Card>
        </TabsContent>
        
        {/* Projects Tab */}
        <TabsContent value="projects" className="outline-none">
          <Card className={`relative overflow-hidden p-8 md:p-10 flex flex-col items-start gap-4 ${pStyles.projectIcon}`} style={!pStyles.projectIcon.includes('bg-') ? { backgroundColor: 'var(--primary-lighter)' } : {}}>
            <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
              <Github size={200} />
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary font-bold text-sm mb-2">
              <Globe size={16} /> Open Source
            </div>
            
            <TypographyH2 className="text-3xl md:text-4xl font-black border-none pb-0 text-dark">
              create-multimorphism
            </TypographyH2>
            
            <TypographyP className="text-lg max-w-2xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
              We just open-sourced our entire frontend architecture! You can now scaffold this exact React dashboard—complete with 14 trending design styles, MobX state management, and perfect responsive routing—instantly from your terminal.
            </TypographyP>

            <div className="mt-6 flex flex-col md:flex-row gap-4 w-full md:w-auto z-10">
              <div className="flex items-center bg-black dark:bg-black/40 text-white font-mono px-6 py-4 rounded-xl shadow-clay-base overflow-x-auto border border-white/10">
                <span className="text-green-400 mr-3">❯</span>
                npm create multimorphism@latest
              </div>
            </div>
            
            <div className="mt-4 flex items-center gap-4 z-10">
              <a href="https://www.npmjs.com/package/create-multimorphism" target="_blank" rel="noreferrer">
                <Button className="shadow-clay-primary">View on NPM</Button>
              </a>
              <a href="https://github.com/sanjaisuresh/multimorphism" target="_blank" rel="noreferrer">
                <Button variant="outline" className="shadow-clay-base hover:shadow-clay-inner bg-white/50 backdrop-blur-sm dark:bg-black/50">
                  <Github size={18} className="mr-2" /> View Source
                </Button>
              </a>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
})

export default Profile
