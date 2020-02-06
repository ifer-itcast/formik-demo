import React from 'react';
import { WingBlank } from 'antd-mobile';

// #1 导入
import { withFormik, Form, Field, ErrorMessage } from 'formik';
// #yup1 导入
import * as Yup from 'yup';

import styles from './index.module.css';

const REG_UNAME = /^[a-zA-Z_\d]{5,8}$/;
const REG_PWD = /^[a-zA-Z_\d]{5,12}$/;

class Login extends React.Component {
	render() {
		// #5 通过 props 获取高阶组件提供的状态（属性和方法），handleChange 是高阶组件自带的，可以打印 this.props 查看
		// const { values, handleSubmit, handleChange } = this.props;
		// #6 替换 state 中的 username 为 values.username，自身的 this.handleSubmit、this.handleChange 都替换成高阶组件提供的
		// #yup3 接收错误提示信息和是否 touched 信息，touched 用于记录这个框是否被访问过（失去焦点肯定能证明访问过）
		// const { errors, touched, handleBlur } = this.props;
		// #yup4 想要获取到 touched 需要给表单元素添加 handleBlur 事件
		return (
			<WingBlank>
				<Form>
					<div className={styles.formItem}>
						<Field className={styles.input} name="username" placeholder="请输入账号" />
					</div>
					{/* 长度为5到8位，只能出现数字、字母、下划线 */}
					{/* <div className={styles.error}>账号为必填项</div> */}
					{/* #yup5 进行错误信息提示 */}
					{/* {errors.username &&touched.username &&<div className={styles.error}>{errors.username}</div>} */}
					<ErrorMessage className={styles.error} name="username" component="div" />
					<div className={styles.formItem}>
						<Field className={styles.input} name="password" placeholder="请输入密码" />
					</div>
					{/* 长度为5到12位，只能出现数字、字母、下划线 */}
					{/* <div className={styles.error}>账号为必填项</div> */}
					{/* {errors.password &&touched.password &&<div className={styles.error}>{errors.password}</div>} */}
					<ErrorMessage className={styles.error} name="password" component="div" />
					<div className={styles.formSubmit}>
						<button className={styles.submit} type="submit">
							登 录
						</button>
					</div>
				</Form>
			</WingBlank>
		);
	}
}

// #2 withFormik 调用返回的是一个高阶组件，这种写法方便传值，然后再包装 Login，并为 Login 提供相关状态（属性和方法）
Login = withFormik({
	// #3 为组件提供状态
	mapPropsToValues: () => ({ username: '', password: '' }),
	// #yup2 添加表单校验规则
	validationSchema: Yup.object().shape({
		username: Yup.string().required('账号为必填项').matches(REG_UNAME, '长度为5到8位，只能出现数字、字母、下划线'),
		password: Yup.string().required('密码为必填项').matches(REG_PWD, '长度为5到12位，只能出现数字、字母、下划线')
	}),
	// #4 表单的提交事件
	handleSubmit: (values, { props }) => {
		// 内部已经阻止了默认行为（跳转），props 中可以获取路由相关的信息
		// #7 获取表单中的数据
		const { username, password } = values;

		console.log(username, password, props);
	}
})(Login);
export default Login;
