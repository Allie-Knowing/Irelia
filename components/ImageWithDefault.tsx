import Image, { ImageProps } from "next/image";
import { FC, useEffect, useState } from "react";
import { defaultProfile } from "@assets/icons";

const ImageWithDefault: FC<ImageProps> = (props) => {
  const { src, ...rest } = props;
  const [data, setData] = useState(src);

  useEffect(() => {
    setData(src);
  }, [src]);

  const onError = () => {
    setData(defaultProfile);
  };

  return <Image {...rest} src={data} alt="image" onError={onError} />;
};

export default ImageWithDefault;
