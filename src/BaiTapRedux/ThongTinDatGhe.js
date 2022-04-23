import React, { Component } from "react";
import { connect } from "react-redux";
import { xoaGheAction } from "../redux/actions/BaiTapDatVeAction";
class ThongTinDatGhe extends Component {
	renderDanhSachGheDangChon = () => {
		return this.props.danhSachGheDangDat.map((ghe, index) => {
			return (
				<tr key={index}>
					<td>{ghe.soGhe}</td>
					<td>{ghe.gia.toLocaleString()}</td>
					<td className='text-center' style={{ color: "red" }}>
						<span
							style={{ cursor: "pointer" }}
							onClick={() => {
								this.props.xoaGhe(ghe);
							}}>
							X
						</span>
					</td>
				</tr>
			);
		});
	};
	render() {
		return (
			<div
				style={{
					fontSize: "30px",
					marginTop: "45px",
				}}>
				<div>
					<button className='btn btn-warning ghe'></button>
					<span className='ms-2'>ghế đã đặt</span>
				</div>
				<div>
					<button className='btn btn-success ghe'></button>
					<span className='ms-2'>ghế đang đặt</span>
				</div>
				<div>
					<button className='btn btn-light ghe'></button>
					<span className='ms-2'>ghế chưa đặt</span>
				</div>
				<div className='mt-5'>
					<table className='table text-light table-bordered' border='2'>
						<thead>
							<tr style={{ fontSize: 25 }}>
								<td>Số ghế</td>
								<td>Giá</td>
								<td></td>
							</tr>
						</thead>
						<tbody>{this.renderDanhSachGheDangChon()}</tbody>
						<tfoot>
							<tr>
								{/* <td></td> */}
								<td>Total:</td>
								<td>
									{this.props.danhSachGheDangDat
										.reduce((arr, curr) => {
											return arr + curr.gia;
										}, 0)
										.toLocaleString()}
								</td>
							</tr>
						</tfoot>
					</table>
				</div>
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
		xoaGhe: (ghe) => {
			dispatch(xoaGheAction(ghe));
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe);
