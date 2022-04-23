import { CHON_GHE, XOA_GHE } from "../types/BaiTapDatVeType.js";
const stateDefault = {
	danhSachGheDangDat: [],
};

export const BaiTapDatVeReducer = (state = stateDefault, action) => {
	switch (action.type) {
		case CHON_GHE: {
			let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
			let index = state.danhSachGheDangDat.findIndex((g) => {
				return g.soGhe === action.ghe.soGhe;
			});
			if (index !== -1) {
				danhSachGheDangDatUpdate.splice(index, 1);
			} else {
				danhSachGheDangDatUpdate.push(action.ghe);
			}
			state.danhSachGheDangDat = danhSachGheDangDatUpdate;
			return { ...state };
		}
		case XOA_GHE: {
			let danhSachGheDangDatUpdate = state.danhSachGheDangDat.filter((g) => {
				return g.soGhe !== action.ghe.soGhe;
			});
			state.danhSachGheDangDat = danhSachGheDangDatUpdate;
			return { ...state };
		}
		default:
			return { ...state };
	}
};
