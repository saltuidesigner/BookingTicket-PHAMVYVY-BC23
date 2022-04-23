import React, { Component } from "react";
import { connect } from "react-redux";
import { chonGheAction } from "../redux/actions/BaiTapDatVeAction";
class HangGhe extends Component {
	renderDanhSachGhe() {
		return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
			let cssGheDaDat = "";
			let cssGheDangChon = "";
			let disabled = false;
			if (ghe.daDat) {
				cssGheDaDat = "gheDuocChon";
				disabled = true;
			}
			let indexDangChon = this.props.danhSachGheDangDat.findIndex((g) => {
				return g.soGhe === ghe.soGhe;
			});
			if (indexDangChon !== -1) {
				cssGheDangChon = "gheDangChon";
			}
			return (
				<button
					onClick={(e) => {
						this.props.chonGhe(ghe);
					}}
					disabled={disabled}
					className={`btn ghe ${cssGheDaDat} ${cssGheDangChon}`}
					key={index}
					style={{ backgroundColor: "white" }}>
					{ghe.soGhe}
				</button>
			);
		});
	}
	render() {
		return (
			<div className='text-light  mt-1' style={{ fontSize: "30px" }}>
				{this.props.hangGhe.hang} {this.renderDanhSachGhe()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		chonGhe: (ghe) => {
			dispatch(chonGheAction(ghe));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
