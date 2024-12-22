import { Dropdown, Menu } from "antd";
//
import { DotHorizontal } from "@/shared/assets/icons";
import { css } from "@/shared/styles";

// action drop antd
export const ActionDropDown = ({
  onEdit,
  onRemove,
}: {
  onEdit(): void;
  onRemove(): void;
}) => {
  return (
    <Dropdown
      trigger={["click"]}
      placement="bottomRight"
      overlay={
        <Menu
          items={[
            {
              key: "1",
              label: "Chỉnh sửa",
              onClick: () => onEdit(),
            },
            {
              key: "2",
              label: "Xóa",
              onClick: () => onRemove(),
            },
          ]}
        />
      }
    >
      <span
        onClick={(e) => e.preventDefault()}
        className={css({
          fontSize: "14px",
          color: "$gray76",
          cursor: "pointer",
        })()}
      >
        <DotHorizontal />
      </span>
    </Dropdown>
  );
};
