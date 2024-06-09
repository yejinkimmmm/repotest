<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="path" value="${pageContext.request.contextPath}"></c:set>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>신규 고객</title>
<script src="https://code.jquery.com/jquery-3.7.1.min.js" 
	integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" 
	crossorigin="anonymous"></script>
	<script src="${path}/resources/js/form.js"></script>
</head>
<body>
	<form action="<c:url value='/new'></c:url>" method="post" id="frm">
		<table>
			<tr>
				<td>**작성일자:</td>
				<td><input type="text" name="frst_reg_dt" value="${currentDate}" readonly /></td>
			</tr>
			<tr>
				<td>*고객명:</td>
				<td><input type="text" name="cust_nm" id="cust_nm"/></td>
			</tr>
			<tr>
				<td>*주민번호:</td>
				<td><input type="text" name="pridtf_no" id="pridtf_no" /></td>
			</tr>
			<tr>
				<td>*이메일:</td>
				<td><input type="text" name="eml_addr" id="eml_addr"/></td>
			</tr>
			<tr>
				<td>전화번호:</td>
				<td><input type="text" name="home_telno" /></td>
			</tr>
			<tr>
				<td>*휴대폰번호:</td>
				<td><input type="text" name="bml_telno" id="bml_telno"/></td>
			</tr>
			<tr>
				<td>*직업:</td>
				<td><input type="text" name="cr_nm" id="cr_nm"/></td>
			</tr>
			<tr>
				<td>주소:</td> 
				<td><input type="text" name="road_nm_addr" /></td>
			</tr>

		</table>
		<button type="reset">신규</button>
		<button type="button" id="insert">등록</button>
		<button type="button" id="view">고객 조회</button>
	</form>
	
</body>
</html>
