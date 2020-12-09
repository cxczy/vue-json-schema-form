/**
 * Created by Liu.Jun on 2019/9/29 18:58.
 */

import componentPackInput from '../viewComponents/Input';
import componentPackColor from '../viewComponents/Color';
import componentPackInputNumber from '../viewComponents/InputNumber';
import componentPackSlider from '../viewComponents/Slider';
import componentPackSelectBoolean from '../viewComponents/SelectBoolean';
import componentPackRadio from '../viewComponents/Radio';
import componentPackMultiSelect from '../viewComponents/MultiSelect';

import componentPackUpload from '../viewComponents/Upload';
import componentPackMultiUpload from '../viewComponents/MultiUpload';

import componentPackTime from '../viewComponents/Time';
import componentPackDate from '../viewComponents/Date';
import componentPackDateRange from '../viewComponents/DateRange';
import componentPackDateTime from '../viewComponents/DateTime';
import componentPackDateTimeRange from '../viewComponents/DateTimeRange';

import componentPackObject from '../viewComponents/Object';
import componentPackArray from '../viewComponents/Array';

import componentPackRequestSelect from '../viewComponents/RequestSelect';


/**
 * hidden 隐藏，不显示在工具栏
 * maxNum Number 最大可配置数
 * topDisplay Bool 最顶部显示
 * bottomDisplay Bool 最底部显示
 * onlyCanConfig Bool 是否只能配置数据，不能删除 copy
 * @type {*[]}
 */
const tools = [
    {
        groupName: '基础组件',
        componentList: [{
            title: '输入框',
            componentPack: componentPackInput
        }, {
            title: '数字输入框',
            componentPack: componentPackInputNumber
        }, {
            title: '数字（slider）',
            componentPack: componentPackSlider
        }, {
            title: '是否选择',
            componentPack: componentPackSelectBoolean
        }, {
            title: '单选类型',
            componentPack: componentPackRadio
        }, {
            title: '多选类型',
            componentPack: componentPackMultiSelect
        }, {
            title: '颜色选择',
            componentPack: componentPackColor
        }]
    },
    {
        groupName: '高级组件',
        componentList: [
            {
                title: '下拉选择（动态）',
                componentPack: componentPackRequestSelect
            }
        ]
    },
    {
        groupName: '文件上传',
        componentList: [{
            title: '单文件',
            componentPack: componentPackUpload
        }, {
            title: '多个文件',
            componentPack: componentPackMultiUpload
        }]
    },
    {
        groupName: '时间日期',
        componentList: [{
            title: '时间选择',
            componentPack: componentPackTime
        }, {
            title: '日期选择',
            componentPack: componentPackDate
        }, {
            title: '日期时间选择',
            componentPack: componentPackDateTime
        }, {
            title: '日期范围',
            componentPack: componentPackDateRange
        }, {
            title: '日期时间范围',
            componentPack: componentPackDateTimeRange
        }]
    },
    {
        groupName: '布局组件',
        componentList: [{
            title: 'Object',
            btnClass: 'w100',
            componentPack: componentPackObject
        }, {
            title: 'Array',
            btnClass: 'w100',
            componentPack: componentPackArray
        }]
    },

];

export default tools;
