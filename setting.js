window.onload = () => {
	const stampWrapper = document.getElementById("stampWrapper");
	stampWrapper.style.display = "none";

	const date = location.search.replace("?", "");
	const checkNow = (Number(date) && date.length == 12) ? date : "";	

	const status = {};
	status.checkNow = checkNow;
	// 配列をJSONデータに変換
	const jsonString = JSON.stringify(status);
	const jsonData = JSON.parse(jsonString);
	const stickersStatus = async (param) => {
		const params = { method: "post", body: JSON.stringify(param) };
		await fetch("https://santaclaus.fbs.co.jp/assets/lib/MentaiStickersStatus.php", params)
		.then((response) => response.json())
		.then((data) => {
			const status = data[0].Code;
            switch (status) {
                case 1:
					stampWrapper.style.display = "flex";
                    break;
                case 2:
					alert("公開前です");
                    break;
                case 3:
					alert("公開修了です");
                    break;
                default:
                    break;
            }

		})
		.catch((error) => {
		})
	}
	stickersStatus(jsonData);
};