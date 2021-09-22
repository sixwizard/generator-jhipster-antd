import React from 'react';
import {useIntl} from 'umi';

export type TitleINTLProps = {
  id?: string;
  text?: string;
};

const TitleINTL: React.FC<TitleINTLProps> = ({ id,text }) => {
  const intl = useIntl();

  return (
    <span>
    {intl.formatMessage({
        id,
        defaultMessage: text,
      })}
    </span>
   );
};

export default TitleINTL;
