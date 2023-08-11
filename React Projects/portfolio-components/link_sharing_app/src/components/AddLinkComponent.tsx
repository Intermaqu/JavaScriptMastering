import React from 'react'
import "../style/addLink.css"
import CustomDropdown from './CustomDropdown';
import CustomInput from './CustomInput';

type Props = {
    index: string;
    id: string;
    handleRemove: (id: string) => void;
    handleChangePlatform: (id:string, platform: string) => void;
    handleChangeLink: (id:string, link: string) => void;
    platform?: string;
    link?: string;
}

const AddLinkComponent = ({index, id, platform = "Github", link, handleRemove, handleChangeLink, handleChangePlatform}: Props) => {
    const handleLocalPlatformChange = (newPlatform: string) => {
        handleChangePlatform(id, newPlatform)
    }

    const handleLocalLinkChange = (newLink: string) => {
        handleChangeLink(id, newLink)
    }
  
    return (
    <div className="add-link-component">
        <div className="add-link-component-header">
            <p className="add-link-component-header-index">Link #{index}</p>
            <p className="bodyM" onClick={() => handleRemove(id)}>Remove</p>
        </div>
        <div className="add-link-component-input-wrapper">
            <p className="bodyS">Platform</p>
            <CustomDropdown value={platform} setValue={handleLocalPlatformChange} options={
                [
                    { id: 1, name: "Github", icon: "github" },
                    { id: 2, name: "Youtube", icon: "youtube" },
                    { id: 3, name: "Linkedin", icon: "linkedin" },
                ]
            }/>
        </div>
        <div className="add-link-component-input-wrapper">
            <p className="bodyS">Link</p>
            <CustomInput value={link} onChangeValue={handleLocalLinkChange} icon={platform} name={"icon"} />
        </div>
    </div>
  )
}

export default AddLinkComponent