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
                animations, and design systems like Claymorphism to bring UIs to life.
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {connections.map(conn => (
                <div key={conn.id} className={`flex items-center justify-between p-4 rounded-2xl ${pStyles.connectionItem}`}>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      {conn.avatar?.startsWith('http') ? (
                        <AvatarImage src={conn.avatar} />
                      ) : (
                        <AvatarFallback>{conn.avatar}</AvatarFallback>
                      )}
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-dark">{conn.name}</h4>
                      <span className="text-sm text-gray-500 font-medium">{conn.role}</span>
                    </div>
                  </div>
                  <Button variant={conn.following ? "outline" : "default"} size="sm" className={conn.following ? 'shadow-clay-inner' : 'shadow-clay-primary'}>
                    {conn.following ? "Following" : "Follow"}
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
        
        {/* Projects Tab */}
        <TabsContent value="projects" className="outline-none">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <Card key={project.id} className="flex flex-col hover:scale-[1.02] transition-transform">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${pStyles.projectIcon}`}
                     style={!pStyles.projectIcon.includes('bg-') ? { backgroundColor: 'var(--primary-lighter)', color: 'var(--primary-default)' } : {}}>
                  <Briefcase size={20} />
                </div>
                <h4 className="font-bold text-lg text-dark mb-2">{project.title || project.flow}</h4>
                <TypographyP className="text-sm mb-6 flex-1">{project.desc}</TypographyP>
                
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-gray-500">Progress</span>
                    <span className="font-bold text-primary">{project.progress}%</span>
                  </div>
                  <div className={`w-full h-2 rounded-full overflow-hidden ${pStyles.progressTrack}`}>
                    <div className="h-full bg-primary" style={{ width: `${project.progress}%` }} />
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100 dark:border-white/5">
                  <div className="flex -space-x-2">
                    {project.team.map((avatar, i) => (
                      <Avatar key={i} className={`w-8 h-8 ${pStyles.avatarBorder}`}>
                        {avatar?.startsWith('http') ? (
                          <AvatarImage src={avatar} />
                        ) : (
                          <AvatarFallback className="text-[10px]">{avatar}</AvatarFallback>
                        )}
                      </Avatar>
                    ))}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${pStyles.progressTrack}`}>
                      <Plus size={14} className="text-primary" />
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="h-8 shadow-clay-base hover:shadow-clay-inner text-xs">View</Button>
                </div>
              </Card>
            ))}
            
            <Card className={`flex flex-col items-center justify-center transition-all cursor-pointer flex-col p-6 rounded-xl ${pStyles.newProjectCard}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${pStyles.progressTrack}`} style={!pStyles.progressTrack.includes('text-') ? { color: 'var(--primary-default)' } : {}}>
                <Plus size={24} />
              </div>
              <h4 className="font-bold text-dark">Create New Project</h4>
              <span className="text-sm text-gray-500 mt-2">Start a new blank project</span>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
})

export default Profile
