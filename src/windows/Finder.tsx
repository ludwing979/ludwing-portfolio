import { WindowControls } from "../components/index";
import { locations, type BaseItem, type Location } from "../constants/index";
import WindowWrapper from "../hoc/WindowWrapper";
import useLocationStore from "../store/Location";
import useWindowStore from "../store/window";
import clsx from "clsx";
import { Search } from "lucide-react";

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  const openItem = (item: Location | BaseItem) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item as Location);
    if (["fig", "url"].includes(item.fileType as string) && item.href)
      return window.open(item.href, "_blank");

    openWindow(`${item.fileType}${item.kind}`, item);
  };

  const renderList = (name: string, locationList: Location[] | BaseItem[]) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {locationList.map((location: Location | BaseItem) => (
          <li
            key={location.id}
            className={clsx(
              location.id === activeLocation?.id ? "active" : "not-active",
            )}
            onClick={() => setActiveLocation(location as Location)}
          >
            <img src={location.icon} alt={location.name} className="w-4" />
            <p className="text-sm font-medium truncate">{location.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          {renderList("Favoritos", Object.values(locations))}
          {renderList("My Projects", locations.work.children)}
        </div>
        <ul className="content">
          {activeLocation?.children.map((item: Location | BaseItem) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => openItem(item)}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
