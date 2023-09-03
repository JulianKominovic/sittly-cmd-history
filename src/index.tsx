import { useEffect, useState } from 'react'
import { BsClipboard, BsCommand } from 'react-icons/bs'
import {
  type ExtensionPages,
  type ExtensionMetadata,
  type ListItem,
  type ExtensionNoResultItems
} from 'sittly-devtools/dist/types'
const { register, api, components, hooks } = window.SittlyDevtools
const { shell, clipboard, path } = api
const { cmd } = shell
const { useRouter, useServices } = hooks
const { pasteToCurrentWindow, copyToClipboard } = clipboard
const { Command } = components
const pages: ExtensionPages = [
  {
    name: 'Commands history',
    description: 'Find all commands you have used in the past quickly',
    icon: <BsCommand />,
    route: '/history-cmd',
    component() {
      const [commands, setCommands] = useState<Map<string, string>>(
        new Map<string, string>()
      )
      const setContextMenuOptions = useServices(
        (state) => state.setContextMenuOptions
      )
      const mappedItems: ListItem[] = [...commands.entries()].map(
        ([command, datetime]) => {
          return {
            title: command,
            description: datetime,
            mainActionLabel: 'Paste to app',
            onClick: () => {
              pasteToCurrentWindow(command)
            },
            onHighlight() {
              setContextMenuOptions([
                {
                  title: 'Copy to clipboard',
                  icon: <BsClipboard />,
                  mainActionLabel: 'Copy to clipboard',
                  onClick() {
                    copyToClipboard(command)
                  }
                }
              ])
            }
          }
        }
      )
      useEffect(() => {
        async function init() {
          const homedir = await path.homeDir()
          const { stdout, stderr } = await cmd('tail', [
            '-n',
            '2000',
            await path.resolve(homedir, '.zsh_history')
          ])

          if (stdout === null) {
            console.log('Error', stderr)
            return
          }
          const entries = stdout.split('\n').reverse()
          const mappedEntries = new Map<string, string>()
          entries.forEach((entry: string) => {
            const [
              ,
              datetime,
              executionTimeAndcommand,
              ...conflictedSplitWithCommand
            ]: (string | undefined)[] = entry
              .split(':')
              .map((item) => item.trim())

            if (!executionTimeAndcommand) return
            if (!datetime) return
            if (Number.isNaN(parseInt(datetime))) return
            const [, ...command] = [
              executionTimeAndcommand,
              conflictedSplitWithCommand.length > 0
                ? ':' + conflictedSplitWithCommand.join(':')
                : ''
            ]
              .join('')
              .split(';')

            const unifiedCommand = command.join(';')

            if (!mappedEntries.has(unifiedCommand))
              mappedEntries.set(
                unifiedCommand,
                Intl.DateTimeFormat(undefined, {
                  timeStyle: 'medium',
                  dateStyle: 'medium'
                }).format(new Date(parseInt(datetime) * 1000))
              )
          })

          setCommands(mappedEntries)
        }
        init()
      }, [])
      return <Command.List id="history-cmd" items={mappedItems} />
    }
  }
]

const noResults: ExtensionNoResultItems = () => {
  const { goTo } = useRouter()
  return [
    {
      title: 'Find inside my command history',
      description: "maybe it's a command",
      icon: <BsCommand />,
      mainActionLabel: 'Use command history extension',
      onClick: () => {
        goTo('/history-cmd')
      }
    }
  ]
}

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
  metadata,
  noResults
})
