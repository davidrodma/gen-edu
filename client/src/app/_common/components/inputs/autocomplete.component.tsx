import React, { useEffect, useRef, useState } from 'react'
import { Label } from './label.component'
import { Control, Controller, FieldValues } from 'react-hook-form'
import {
  AutoCompleteChangeEvent,
  AutoCompleteCompleteEvent,
  AutoComplete as AutoCompletePrime,
  AutoCompleteProps,
} from 'primereact/autocomplete'

type AutoCompletePropsType<T extends FieldValues> = AutoCompleteProps & {
  items: any[]
  propertyLabel?: string | undefined
  propertyKey?: string | undefined
  selectedType?: 'item' | 'key'
  label?: string
  addClassName?: string
  control?: Control<T, any>
}
export function AutoComplete<T extends FieldValues = FieldValues>({
  label,
  addClassName = '',
  name,
  items,
  selectedType = 'key',
  propertyLabel = 'label',
  propertyKey = 'key',
  value,
  control,
  defaultValue,
  completeMethod,
  onChange,
  ...props
}: AutoCompletePropsType<T>) {
  const [selectedItem, setSelectedItem] = useState<any>(value)
  const [filteredItems, setFilteredItems] = useState<any[]>(items)
  const initPropertyKey = useRef<string>(propertyKey)
  const initValue = useRef<any>(value)

  useEffect(() => {
    const selected = items.find(item => item[initPropertyKey.current] === initValue.current)
    setSelectedItem(selected ? selected : initValue.current)
  }, [items])

  const search = (event: AutoCompleteCompleteEvent) => {
    let _filteredItems
    if (!event.query.trim().length) {
      _filteredItems = [...items]
    } else {
      _filteredItems = items.filter(item => {
        return (item[propertyLabel] || item[propertyKey]).toLowerCase().includes(event.query.toLowerCase())
      })
    }
    setFilteredItems(_filteredItems)
  }
  if (value) {
    value =
      selectedType == 'item' ? items.find(item => item[propertyKey] == value[propertyKey]) : value[propertyKey] || value
  }
  if (control) {
    /*     return (
      <Controller
        name={name as any}
        control={control}
        defaultValue={defaultValue as any}
        render={({ field, fieldState }) => (
          <div className="w-full">
            <Label label={label} />
            <AutoCompletePrime
              inputId={field.name}
              value={field.value}
              onChange={field.onChange}
              inputRef={field.ref}
              suggestions={items}
              className={`default-input ${addClassName}`}
              completeMethod={completeMethod}
              {...props}
            />
          </div>
        )}
      />
    ) */
    return (
      <Controller
        name={name as any}
        control={control}
        defaultValue={value}
        render={({ field, fieldState }) => (
          <div className="w-full">
            <Label label={label} />
            <AutoCompletePrime
              inputId={field.name}
              value={selectedItem}
              suggestions={filteredItems}
              field={propertyLabel}
              onChange={(e: AutoCompleteChangeEvent) => {
                const newValue = selectedType == 'key' && e.value[propertyKey] ? e.value[propertyKey] : e.value
                const newValueLabel = selectedType == 'key' && e.value[propertyLabel] ? e.value[propertyLabel] : e.value
                field.onChange(newValue)
                setSelectedItem(newValueLabel)
                if (onChange) {
                  onChange(e)
                }
              }}
              inputRef={field.ref}
              className={`default-input ${addClassName}`}
              completeMethod={search}
              {...props}
            />
          </div>
        )}
      />
    )
  } else {
    return (
      <div className="w-full">
        <Label label={label} />
        <AutoCompletePrime
          name={name}
          field={propertyLabel}
          value={selectedItem}
          suggestions={filteredItems}
          completeMethod={search}
          onChange={(e: AutoCompleteChangeEvent) => {
            setSelectedItem(e.value)
            if (onChange) {
              onChange(e)
            }
          }}
          className={`default-input ${addClassName}`}
          {...props}
        />
      </div>
    )
    /*     return (
      <div className="w-full">
        <Label label={label} />
        <AutoCompletePrime
          value={value}
          suggestions={items}
          completeMethod={completeMethod}
          onChange={onChange}
          className={`default-input ${addClassName}`}
          {...props}
        />
      </div>
    ) */
  }
}
