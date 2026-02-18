import useWindowStore from "../store/window";
import WindowWrapper from "../hoc/WindowWrapper";
import { WindowControls } from "../components/index";

interface TextFileData {
  name: string;
  imageUrl?: string;
  subtitle?: string;
  description: string[];
}

const Text = () => {
  const { windows } = useWindowStore();

  const data: TextFileData | undefined = windows.txtfile?.data;

  if (!data) {
    return null;
  }

  const { name, imageUrl, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 space-y-6 bg-white">
        {imageUrl && (
          <div className="w-full">
            <img src={imageUrl} alt={name} className="w-full h-auto rounded" />
          </div>
        )}
        {subtitle && <h3 className="text-lg font-semibold">{subtitle}</h3>}
      </div>

      {description.length > 0 && (
        <div className="p-5 space-y-3 leading-relaxed text-base text-gray-800">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
