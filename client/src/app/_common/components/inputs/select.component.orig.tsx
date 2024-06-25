import React from 'react'
import { Dropdown, DropdownProps } from 'primereact/dropdown'
import { Label } from './label.component'
import { InputController } from './input-controller.component'
import { Control, FieldValues } from 'react-hook-form'
/*
  <Select
          items={roles}
          value={formData?.role}
          label="Role"
          name="role"
          selectedType="key"
          control={control}
        />
*/
type DropdownPropsType<T extends FieldValues> = DropdownProps & {
  items: any[]
  propertyLabel?: string | undefined
  propertyKey?: string | undefined
  selectedType?: 'item' | 'key'
  label?: string
  addClassName?: string
  control?: Control<T, any>
}
export function Select<T extends FieldValues = FieldValues>({ ...allProps }: DropdownPropsType<T>) {
  const inputElement = ({
    label,
    addClassName = '',
    items,
    propertyLabel = 'label',
    selectedType = 'key',
    propertyKey = 'key',
    value,
    control,
    ...props
  }: DropdownPropsType<T>) => {
    if (value) {
      value =
        selectedType == 'item'
          ? items.find(item => item[propertyKey] == value[propertyKey])
          : value[propertyKey] || value
    }

    return (
      <div className="w-full">
        <Label label={label} />
        <div className="card flex justify-content-center">
          <Dropdown
            options={items}
            value={value}
            optionLabel={propertyLabel}
            optionValue={selectedType == 'item' ? undefined : propertyKey}
            placeholder="Select"
            className={`default-input ${addClassName}`}
            {...props}
          />
        </div>
      </div>
    )
  }

  return allProps?.control
    ? InputController(allProps, (params = allProps) => inputElement(params))
    : inputElement(allProps)
}
