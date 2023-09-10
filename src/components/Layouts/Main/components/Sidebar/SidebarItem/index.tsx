import React, { useCallback, useState } from 'react'
import { IRoutGroupItemProps } from '../types'
import { useRouter } from 'next/router'
import { Box } from '@chakra-ui/react';

export const SidebarItem = ({
  menuTogle,
  item,
  setSelectedItem,
  isItemSelected
}: IRoutGroupItemProps) => {
  const router = useRouter();
  const { pathname } = router;

  const [selectedSubItem, setSelectedSubItem] = useState<string | undefined>();
  const [openConfig, setOpenConfig] = useState(false);

  const handleClickItem = useCallback((e: any) => {
    if (item.path) {
      setSelectedItem(item.name);
      setSelectedSubItem(undefined);
      e.preventDefault();
      router.push(item.path);
      setOpenConfig(true);
      return;
    }

    if (item.items) {
      setSelectedItem(item.name);
      setSelectedSubItem(undefined);
      setOpenConfig(true);
    }
  }, [item, router, setSelectedItem]);

  const setBgColog = useCallback((e: any) => {
    if (!isItemSelected) {
      return undefined;
    }

    return {
      bgColor: "#0f0f0f" // tornar dinâmico
    }
  }, [isItemSelected]);

  const setColor = useCallback((prop: { isSub: boolean }) => {
    if (!prop.isSub) {
      return undefined;
    }
    return {
      color: "orange"
    }
  }, []);

  return (
    <Box mb={item.items && (!menuTogle || !isItemSelected) ? "0vw" : "0"}>

    </Box>
  )
}
