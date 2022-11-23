import * as React from 'react';
import style from './Banner.module.scss';

interface IProps {
  name: string;
}

export default class Banner extends React.Component<IProps> {
  public render() {
    return (
      <div className={style.Banner}>
        <span className={style.Banner__Text}>Hello {this.props.name}!</span>
      </div>
    );
  }
}
