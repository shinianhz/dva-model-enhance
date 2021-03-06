/*
 * @Author: yehq
 * @Date: 2019-06-20 14:55:41
 * @Last Modified by: yehq
 * @Last Modified time: 2019-10-30 10:45:32
 * 设置 selector 的 state 默认类型
 * 默认开启 state 的浅比较
 */

import { useSelector as reactReduxUseSelector, shallowEqual } from 'react-redux';
import StoreState from '../StoreState';

export interface Selector<TState, TSelected> {
    (state: TState): TSelected;
}

const useSelector = <TState extends StoreState, TSelected>(
    selector: Selector<TState, TSelected>,
    equalityFn?: (left: TSelected, right: TSelected) => boolean
) => {
    return reactReduxUseSelector<TState, TSelected>(selector, equalityFn || shallowEqual);
};

export default useSelector;
