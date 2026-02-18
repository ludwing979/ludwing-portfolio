import useWindowStore from "../store/window";
import WindowWrapper from "../hoc/WindowWrapper";
import { WindowControls } from "../components/index";

interface ImageFileData {
  name: string;
  imageUrl: string;
}

const Image = () => {
  const { windows } = useWindowStore();

  const data: ImageFileData | undefined = windows.imgfile?.data;

  if (!data) {
    return null;
  }

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 bg-white flex items-center justify-center min-h-96">
        <img
          src={imageUrl}
          alt={name}
          className="max-w-full max-h-96 rounded"
        />
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
