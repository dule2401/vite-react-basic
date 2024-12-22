import { Dispatch, SetStateAction, useState } from 'react';
import { UploadProps as AntdUploadProps, Upload as AntdUpload } from 'antd';
import { RcFile } from 'antd/es/upload';
//
import { HelpText } from '../AntdForm';

export type UploadProps<T = any> = Omit<AntdUploadProps<T>, 'fileList'> & {
  allowedExts?: string[];
  maxSize?: number;
  normalizeFile?(f: RcFile): T;
  controls?: {
    fileList: T[];
    setFileList: Dispatch<SetStateAction<T[]>>;
  };
};

const validateFileType =
  (allowedTypes?: string[]) =>
  ({ type }: File) => {
    if (!allowedTypes) {
      return true;
    }

    if (type) {
      return allowedTypes.includes(type);
    }
  };

const validateSize =
  (maxSize?: number) =>
  ({ size }: File) => {
    if (!maxSize) return true;
    if (size) return size < maxSize;
  };

export function Upload<T extends RcFile>({
  normalizeFile = (f) => f as T,
  children,
  ...props
}: UploadProps<T>) {
  const [_fileList, _setFileList] = useState<T[]>([]);
  const fileList = props.controls?.fileList || _fileList;
  const setFileList = props.controls?.setFileList || _setFileList;

  const [error, setError] = useState<string>();

  const validate = (f: File) => {
    if (!validateFileType(props.allowedExts)(f)) {
      setError(`Định dạng file không hợp lệ`);
      return false;
    }

    if (!validateSize(props.maxSize)(f)) {
      setError(`Kích thước file vượt quá giới hạn`);
      return false;
    }
    return true;
  };

  return (
    <>
      <AntdUpload
        {...props}
        fileList={fileList}
        beforeUpload={(f: RcFile, fileList) => {
          setError('');
          if (!validate(f)) return false;

          setFileList((state) => [...state, normalizeFile(f)]);

          return props.beforeUpload?.(f, fileList);
        }}
        onRemove={(file) => {
          if (fileList.some((item) => item.uid === file.uid)) {
            setFileList((fileList) => fileList.filter((item) => item.uid !== file.uid));
            return true;
          }
          return false;
        }}
        onChange={(f) => {
          if (!validate(f.file as unknown as File)) return;
          props.onChange?.(f);
        }}
      >
        {children}
        {error && <HelpText color="error">{error}</HelpText>}
      </AntdUpload>
    </>
  );
}
