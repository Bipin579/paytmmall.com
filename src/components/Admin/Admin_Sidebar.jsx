import React, { useEffect, useState } from 'react';
import { Box, Flex, Avatar, HStack, Link, IconButton, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useDisclosure, useColorModeValue } from '@chakra-ui/react';
import { CloseButton, VStack, Icon, Drawer, DrawerContent, Text } from '@chakra-ui/react';
import { FiHome, FiCompass, FiMenu, FiBell, FiChevronDown, FiUsers, FiPlus, FiShoppingCart} from 'react-icons/fi';
import ManageAdmins from './ManageAdmins';
import ManageUsers from './ManageUsers';
import ManageOrders from './ManageOrders';
import ManageProducts from './ManageProducts';
import AddProducts from './AddProducts';
import AddAdmins from './AddAdmins';

const LinkItems = [
    { name: 'Dashboard', compName: 'Dashboard', icon: FiHome },
    { name: 'Add Products', compName: 'AddProducts', icon: FiPlus },
    { name: 'Manage Products', compName: 'ManageProducts', icon: FiCompass },
    { name: 'Manage Orders', compName: 'ManageOrders', icon: FiShoppingCart },
    { name: 'Add Admins', compName: 'AddAdmins', icon: FiPlus },
    { name: 'Manage Admins', compName: 'ManageAdmins', icon: FiUsers }
];

function SidebarWithHeader({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [comp, setComp] = useState('Dashboard');
    const componentChange = (compName = comp) => {
        if (compName === 'Dashboard')return <ManageUsers />
        else if (compName === 'ManageAdmins')return <ManageAdmins />
        else if (compName === 'ManageOrders')return  <ManageOrders />
        else if (compName === 'ManageProducts')return  <ManageProducts />
        else if (compName === 'AddProducts')return  <AddProducts />
        else if (compName === 'AddAdmins')return  <AddAdmins />  
    }

    useEffect(()=>{
        componentChange(comp)
    },[comp])

    const SidebarContent = ({ onClose, ...rest }) => {
        return (
            <Box
                transition="3s ease"
                bg={useColorModeValue('white', 'gray.900')}
                borderRight="1px"
                borderRightColor={useColorModeValue('gray.200', 'gray.700')}
                w={{ base: 'full', md: 60 }}
                pos="fixed"
                h="full"
                {...rest}>
                <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                    {/* <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">Ritik</Text> */}
                    <Avatar size='full' src={'https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-19/RCT211_mall_logo_596529.jpeg'}/>
                    <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
                </Flex>
                {LinkItems.map((link) => (
                    <NavItem onClick={() =>setComp(link.compName)} key={link.name} icon={link.icon}>
                        {link.name}
                    </NavItem>
                ))}
            </Box>
        );
    };

    return (
        <Box>
            <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
                <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
                <Drawer
                    autoFocus={false}
                    isOpen={isOpen}
                    placement="left"
                    onClose={onClose}
                    returnFocusOnClose={false}
                    onOverlayClick={onClose}
                    size="full">
                    <DrawerContent>
                        <SidebarContent onClose={onClose} />
                    </DrawerContent>
                </Drawer>
                {/* mobilenav */}
                <MobileNav onOpen={onOpen} />
                <Flex className='main-content' justifyContent={'center'}  >
                    {componentChange()}
                </Flex>
                <Box ml={{ base: 0, md: 60 }} p="4">{children}</Box>
            </Box>
        </Box>
    );
}

const NavItem = ({ icon, children, ...rest }) => {
    return (
        <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
                {...rest}>
                {icon && (<Icon mr="4" fontSize="16" _groupHover={{ color: 'white', }} as={icon} />)}
                {children}
            </Flex>
        </Link>
    );
};

const MobileNav = ({ onOpen, ...rest }) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}>
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />
            <HStack spacing={{ base: '0', md: '6' }}>
                <IconButton
                    size="lg"
                    variant="ghost"
                    aria-label="open menu"
                    icon={<FiBell />}
                />
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton
                            py={2}
                            transition="all 0.3s"
                            _focus={{ boxShadow: 'none' }}>
                            <HStack>
                                <Avatar
                                    size={'sm'}
                                    src={'https://avatars.githubusercontent.com/u/72447250?v=4'}
                                />
                                <VStack display={{ base: 'none', md: 'flex' }} alignItems="flex-start" spacing="1px" ml="2">
                                    <Text fontSize="sm">Ritik</Text>
                                    <Text fontSize="xs" color="gray.600">Admin</Text>
                                </VStack>
                                <Box display={{ base: 'none', md: 'flex' }}>
                                    <FiChevronDown />
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList
                            bg={useColorModeValue('white', 'gray.900')}
                            borderColor={useColorModeValue('gray.200', 'gray.700')}>
                            <MenuItem>Profile</MenuItem>
                            <MenuDivider />
                            <MenuItem>Sign out</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};

export default SidebarWithHeader;