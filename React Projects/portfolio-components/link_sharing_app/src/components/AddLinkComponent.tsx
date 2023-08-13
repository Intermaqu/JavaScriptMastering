import React from "react";
import "../style/addLink.css";
import CustomDropdown from "./CustomDropdown";
import CustomInput from "./CustomInput";
import allDropdownOptions from "../utils/allDropdownOptions";
import { handleFormatName } from "../utils/handleIcon";

type Props = {
  handleRemove: (id: string) => void;
  handleChangeLink: (id: string, link: ILink) => void;
  link: ILink;
  index: number;
};

interface IOption {
  name: string;
  icon: string;
  id: string;
}

interface ILink {
  link: string;
  icon: string;
  id: string;
}

const AddLinkComponent = ({
  link,
  handleRemove,
  handleChangeLink,
  index,
}: Props) => {
  const handleLocalChangeLink = (name: string, value: string) => {
    // console.log("handleLocalChangeLink");
    setLocalLink({ link: value });
    handleChangeLink(link.id, { ...link, [name]: value });
  };

  const handleLocalChangePlatform = (option: IOption) => {
    // console.log("handleLocalChangePlatform");
    setLocalState(option);
    handleChangeLink(link.id, { ...link, icon: option.icon });
  };

  const [localState, setLocalState] = React.useState<IOption>({
    name: handleFormatName(link.icon),
    icon: link.icon,
    id: link.id,
  });
  const [localLink, setLocalLink] = React.useState<{ link: string }>({
    link: link.link,
  });

  return (
    <div className="add-link-component" onClick={() => console.log(link.id)}>
      <div className="add-link-component-header">
        <p className="add-link-component-header-index">Link #{index}</p>
        <p className="bodyM" onClick={() => handleRemove(link.id)}>
          Remove
        </p>
      </div>
      <div className="add-link-component-input-wrapper">
        <p className="bodyS">Platform</p>
        <CustomDropdown
          value={localState}
          setValue={handleLocalChangePlatform}
          options={allDropdownOptions}
        />
      </div>
      <div className="add-link-component-input-wrapper">
        <p className="bodyS">Link</p>
        <CustomInput
          value={localLink.link}
          onChangeValue={handleLocalChangeLink}
          icon={link.icon}
          name="link"
        />
      </div>
    </div>
  );
};

export default AddLinkComponent;
