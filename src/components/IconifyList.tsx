import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Icon } from "@iconify/react";
// import "../index.css"


interface PoupupProps {
    visible: boolean;
}

interface IconItemProps {
    color: string;
}

const DefaultIcons = [
    'material-symbols:account-balance',
    'material-symbols:add-shopping-cart',
    'material-symbols:account-tree-outline',
    'material-symbols:account-balance-wallet-outline-rounded',
    'material-symbols:attach-money',
    'material-symbols:card-travel-outline',
    'material-symbols:contactless',
    'material-symbols:paid',
    'material-symbols:account-balance',
    'material-symbols:add-shopping-cart',
    'material-symbols:account-tree-outline',
    'material-symbols:account-balance-wallet-outline-rounded',
    'material-symbols:attach-money',
    'material-symbols:card-travel-outline',
    'material-symbols:contactless',
    'material-symbols:paid',
    'material-symbols:account-balance',
    'material-symbols:add-shopping-cart',
    'material-symbols:account-tree-outline',
    'material-symbols:account-balance-wallet-outline-rounded',
    'material-symbols:attach-money',
    'material-symbols:card-travel-outline',
    'material-symbols:contactless',
    'material-symbols:paid',
    'material-symbols:account-balance',
    'material-symbols:add-shopping-cart',
    'material-symbols:account-tree-outline',
    'material-symbols:account-balance-wallet-outline-rounded',
    'material-symbols:attach-money',
    'material-symbols:card-travel-outline',
    'material-symbols:contactless',
    'material-symbols:paid',
    'material-symbols:account-balance',
    'material-symbols:add-shopping-cart',
    'material-symbols:account-tree-outline',
    'material-symbols:account-balance-wallet-outline-rounded',
    'material-symbols:attach-money',
    'material-symbols:card-travel-outline',
    'material-symbols:contactless',
    'material-symbols:paid',

]

const Container = styled.div`
    position: relative;
    display: inline-block;
`

const Button = styled.div`
    cursor: pointer;
`

const DialogModal = styled.div<PoupupProps>`
    display: ${props => props.visible ? "block" : "none"};
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 0px;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
`

const DialogContent = styled.div`
    background-color: #fefefe;
    margin: 15% auto;
    border: 1px solid #888;
    min-width: 320px;
    width: 23%;
    height: 220px;
    padding: 0px;

`

const DialogHeader = styled.div`
    text-align: right;
    height: 16px;
    padding: 4px;
    margin: auto;
    border-bottom: 1px solid #ddd;

`

const DialogCloseButton = styled.span`
    color: #aaa;
    font-size: 28px;
    line-height: 16px;
    font-family: sans-serif;
 
    &:hover,
    &:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
  }
`

const DialogBody = styled.div`
    height: calc(100% - 16px - 8px);
    overflow-y: auto;
    text-align: center;
`



const IconItem = styled.span<IconItemProps>`
    color: gray;
    cursor: pointer;
    margin: 5px;
    &:hover {
        color: ${props => props.color ? props.color : "blue"};
    }

`


interface IconifyListProps {
    provider?: string
    color?: string
    sizeButton?: string
    iconList?: string[]
    icon?: string
    showHint?: boolean
    onChange: (color: string) => void;
    // setColor?: (color: string) => void;
}

function IconifyList({ provider = "mdi", sizeButton = "28", color = "#000", iconList = DefaultIcons, icon = DefaultIcons[0], onChange, showHint = false }: IconifyListProps) {
    const [open, setOpen] = useState(false)
    const [icons, setIcons] = useState(iconList)
    const [selectedIcon, setSelectedIcon] = useState(icon)
    const [hover, setHover] = useState(false);
    const [iconHelp, setIconHelp] = useState("");
    


    const handleClick = () => {
        setOpen((prev) => !open)
    }

    const SelectIcon = (icon: string) => {
        setSelectedIcon(icon)
        setOpen(false)
        onChange(icon)
    }

    const handleMouseEnter = (icon: string) => {
        if (showHint) {
            setHover(true)
            setIconHelp(icon)
        }
    }

    const handleMouseLeave = () => {
        if (showHint) {
            setHover(false)
        }
    }



    // useEffect(() => {
    // console.log(listIcons('', 'material-symbols'));
    // }, [])

    return (
        <>
            <Container>
                <Button onClick={() => setOpen((prev) => !prev)}
                    style={{ width: sizeButton, height: sizeButton }}
                >
                    <Icon icon={selectedIcon} width={sizeButton} height={sizeButton} color={color}/>
                </Button>

                <DialogModal key="teste" visible={open} onClick={(e) => { setOpen((false)) }}>
                    <DialogContent onClick={(e) => e.stopPropagation()}>
                        <DialogHeader>
                            { showHint && hover && iconHelp}
                            <DialogCloseButton onClick={() => setOpen((false))}>
                                &times;
                            </DialogCloseButton>
                        </DialogHeader>

                        <DialogBody>
                            {icons.map((icon, index) => (
                                <IconItem color={color}>
                                    <Icon 
                                        icon={icon} 
                                        width="32" 
                                        height="32" 
                                        onClick={(e) => SelectIcon(icon)} 
                                        onMouseEnter={() => handleMouseEnter(icon)}
                                        onMouseLeave={handleMouseLeave}/>
                                </IconItem>
                            ))}
                        </DialogBody>
                    </DialogContent>

                </DialogModal>

            </Container>
        </>
    )
}

export default IconifyList