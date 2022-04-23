import React, { Component } from "react";
import { connect } from "react-redux";
import "./BookingTicket.css";
import HangGhe from "./HangGhe";
import danhSachGheData from "../data/danhSachGhe.json";
import ThongTinDatGhe from "./ThongTinDatGhe";
export class BookingTicket extends Component {
	renderHangGhe() {
		return danhSachGheData.map((hangGhe, index) => {
			if (index === 0) {
				return (
					<div
						key={index}
						className='text-left mt-1'
						style={{ fontSize: "30px" }}>
						<div className='ms-4'>
							{hangGhe.hang}
							{hangGhe.danhSachGhe.map((ghe, index) => {
								return (
									<button className='btn rowNumber' key={index}>
										{ghe.soGhe}
									</button>
								);
							})}
						</div>
					</div>
				);
			}
			return (
				<div key={index} className='text-left '>
					<HangGhe hangGhe={hangGhe} />
				</div>
			);
		});
	}
	render() {
		return (
			<div
				style={{
					padding: "0",
					position: "fixed",
					width: "100%",
					height: "100%",
					backgroundImage: "url('./bookingTicket/bgmovie.jpg')",
					backgroundSize: "100%",
				}}>
				<div
					style={{
						position: "fixed",
						backgroundColor: "rgba(0,0,0,0.8)",
						width: "100%",
						height: "100%",
						display: "flex",
						justifyContent: "center",
					}}>
					<div className='container-fluid '>
						<div
							className='row'
							style={{
								color: "white",
								display: "flex",
								justifyContent: "center",
							}}>
							<div className='col-8 text-center'>
								<h1
									className='display-5'
									style={{
										color: "#ffc107",
										fontWeight: "700",
									}}>
									ĐẶT VÉ XEM PHIM CYBERLEARN.VN
								</h1>
								<div
									className='text-light'
									style={{
										fontSize: "25px",
									}}>
									Screen
								</div>
								<div
									className='text-light mt-2 mb-3'
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										flexDirection: "column",
									}}>
									<div className='screen'></div>
									<div style={{ width: "100%" }}>{this.renderHangGhe()}</div>
								</div>
							</div>
							<div className='col-4'>
								<h2
									className='text-center'
									style={{
										margin: "0",
										fontWeight: "700",
										fontSize: "30px",
									}}>
									DANH SÁCH GHẾ BẠN CHỌN
								</h2>
								<ThongTinDatGhe />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (rootReducer) => ({
	movieState: rootReducer.movieTheaterReducer,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BookingTicket);
