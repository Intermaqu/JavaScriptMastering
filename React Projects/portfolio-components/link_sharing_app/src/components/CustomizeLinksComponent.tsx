import React, {useState} from 'react'
import CustomButton from './CustomButton';
import "../style/customizeLinks.css"
// import {nanoid} from nanoid
import AddLinkComponent from './AddLinkComponent';

type Props = {}
interface ILink {
    link: string;
    icon: string;
    id: string;
}

const CustomizeLinksComponent = (props: Props) => {
    const [links, setLinks] = useState<ILink[]>([
        {
            link: "",
            icon: "github",
            id: "123456"
        }
    ])
    const handleRemove = (id: string) => {
        const newLinks = links.filter((link) => link.id !== id)
        setLinks(newLinks)
    }

    const handleChangeLink = (id: string, newLink: string) => {
        const newLinks = links.map((link) => {
            if (link.id === id) {
                return {
                    ...link,
                    link: newLink
                }
            }
            return link
        })
        setLinks(newLinks)
    }

    const handleChangePlatform = (id: string, newPlatform: string) => {
        const newLinks = links.map((link) => {
            if (link.id === id) {
                return {
                    ...link,
                    icon: newPlatform
                }
            }
            return link
        })
        setLinks(newLinks)
    }


    


  return (
    <div className="customize-links-wrapper">
        <div className="customize-links">
            <p className="headingM">Customize your links</p>
            <p className="bodyM">Add/edit/remove links below and then share all your profiles with the world!</p>
            <div className="customize-links-links">
                <CustomButton text="+ Add Link" type="secondary" onClick={undefined} />
                {links.map((link, index) => (
                    <AddLinkComponent
                        link={link.link}
                        platform={link.icon}
                        id={link.id}
                        index={(index + 1).toString()} 
                        handleRemove={handleRemove}
                        handleChangeLink={handleChangeLink}
                        handleChangePlatform={handleChangePlatform}
                        />
                ))}
            </div>
        </div>
        <div className="customize-links-buttons">
            <CustomButton text="Save" type="primary" width="fit-content" onClick={undefined} />
        </div>
    </div>
  )
}

export default CustomizeLinksComponent