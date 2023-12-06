import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgPlaceholder from "../../assets/placeholder.png";
const ImageUpload = ({
  setPicture,
  picture,
  currentImage,
  setCurrentImage,
  labelText,
  error,
}) => {
  return (
    <div className="relative flex w-1/3 flex-1 flex-col items-center sm:items-start">
      {!picture && !currentImage ? (
        <img
          className={`m-auto mb-6 w-64 rounded-lg border ${
            error && !picture ? "border-red-300" : "border-gray-300"
          } `}
          src={imgPlaceholder}
          alt="placeholder"
        />
      ) : (
        <>
          <FontAwesomeIcon
            onClick={() => {
              setPicture();
              if (setCurrentImage) {
                setCurrentImage();
              }
            }}
            className="primary-color absolute -right-3 -top-2 text-3xl"
            icon="fa-solid fa-circle-xmark"
          />
          {picture ? (
            <img
              className=" m-auto mb-6 w-64 rounded border border-green-400"
              src={URL.createObjectURL(picture)}
              alt=""
            />
          ) : (
            currentImage && (
              <img
                className=" m-auto mb-6 w-64 rounded border border-green-400"
                src={currentImage.secure_url}
                alt=""
              />
            )
          )}
        </>
      )}

      <div className="upload-module flex w-52 flex-col items-center justify-center gap-3">
        <label
          className="rounded bg-black p-3 text-center text-white"
          htmlFor="picture"
        >
          {labelText}
        </label>
        <input
          onChange={(event) => {
            setPicture(event.target.files[0]);
            setCurrentImage();

            console.log("event.target.files[0]=>", event.target.files[0]);
          }}
          className="hidden"
          type="file"
          id="picture"
        />
      </div>
    </div>
  );
};
export default ImageUpload;
