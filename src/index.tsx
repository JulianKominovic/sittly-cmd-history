import { useEffect, useState } from 'react'
import { BsCommand } from 'react-icons/bs'
import {
  type ExtensionPages,
  type ExtensionMetadata,
  type ListItem
} from 'sittly-devtools/dist/types'
const { register, api, components } = window.SittlyDevtools
const { shell, clipboard } = api
const { cmd } = shell
const { pasteToCurrentWindow } = clipboard
const { Command } = components
const pages: ExtensionPages = [
  {
    name: 'Commands history',
    description: 'Find all commands you have used in the past quickly',
    icon: <BsCommand />,
    route: '/history-cmd',
    component() {
      const [commands, setCommands] = useState<
        {
          datetime: string
          command: string
        }[]
      >([])
      const mappedItems: ListItem[] = commands.map(({ command, datetime }) => {
        return {
          title: command,
          description: datetime,

          mainActionLabel: 'Paste command',
          onClick: () => {
            pasteToCurrentWindow(command)
          }
        }
      })
      useEffect(() => {
        async function init() {
          const { stdout: bashDir } = await cmd(`$HISTFILE`, [])
          const { stdout, stderr } = await cmd('cat $HISTFILE', [bashDir + ''])
          console.log({
            stdout,
            stderr
          })
          if (stdout === null) {
            console.log('Error', stderr)
            return
          }
          const entries = stdout.split('\n')
          const mappedEntries: {
            datetime: string
            command: string
          }[] = entries.map((entry: string) => {
            const [, datetime, command] = entry.split('  ')
            return {
              command,
              datetime
            }
          })
          setCommands(mappedEntries)
        }
        init()
      }, [])
      return <Command.List id="history-cmd" items={mappedItems} />
    }
  }
]
/**
 * Metadata is really important, it's used to display your extension in the app.
 * @see docs.com
 */
const metadata: ExtensionMetadata = {
  name: 'Commands history',
  description: 'Find all commands you have used in the past quickly',
  icon: <BsCommand />,
  repoUrl: 'https://github.com/JulianKominovic/sittly-cmd-history'
}

register({
  pages,
  metadata
})
