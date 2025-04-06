'use client'

import { AppShell, Burger, Group, Skeleton, Switch, useMantineColorScheme, Grid } from '@mantine/core';
import { NavbarSimple } from '../NavbarSimple/NavbarSimple';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { useState } from 'react';

export function DefaultAppShell({ children }: { children: React.ReactNode }) {
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [checked, setChecked] = useState(true);
  const { setColorScheme } = useMantineColorScheme();

  return (
    <AppShell
      header={{ height: 60}}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: !desktopOpened, mobile: !mobileOpened } }}
      padding="md"
    >
      <AppShell.Header p="md">
        <Grid>
            <Grid.Col span={4}>
                <Group >
                <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
                <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
                <MantineLogo size={30} />         
                </Group>
            </Grid.Col>
            <Grid.Col span={4}>
            </Grid.Col>
            <Grid.Col span={4}>
                <Group justify='flex-end' >         
                <Switch            
                    size="lg"
                    checked={checked}
                    onChange={(event) => {setChecked(event.currentTarget.checked); setColorScheme(checked ? 'dark' : 'light')}}
                    onLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)" />}
                    offLabel={<IconMoon size={16} stroke={2.5} color="var(--mantine-color-blue-6)" />}
                    />
                </Group>
            </Grid.Col>
        </Grid>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <NavbarSimple />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}