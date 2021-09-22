import React from 'react';
import { Select, Spin } from 'antd';
import { SelectProps } from 'antd/es/select';
import debounce from 'lodash/debounce';
const { Option } = Select;


export interface DebounceSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType>, 'options' | 'children'> {
  fetchOptions: (search: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
  fieldValue?: any;
  labelName?: string;
}


const DebounceSelect: React.FC<DebounceSelectProps> = ({ fetchOptions, debounceTimeout = 800, fieldValue, labelName, form, ...props }) => {
  const [fetching, setFetching] = React.useState(false);
  const label = labelName || 'name';
  let initialOption = [];
  let defaultValue = [];
  if(Array.isArray(fieldValue)){
    fieldValue.forEach(item =>{
      initialOption.push({label:item[label],value:item.id})
      defaultValue.push(item.id)
    })
  } else {
    initialOption = fieldValue? [{label:fieldValue[label],value:fieldValue.id}]:[];
    defaultValue = fieldValue?.id;
  }

  const [options, setOptions] = React.useState(initialOption);
  const fetchRef = React.useRef(0);

  const debounceFetcher = React.useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);

      fetchOptions(value).then(newOptions => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }

        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  return (
    <Select
      showSearch
      defaultValue={defaultValue}
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  );
};

export default DebounceSelect;
