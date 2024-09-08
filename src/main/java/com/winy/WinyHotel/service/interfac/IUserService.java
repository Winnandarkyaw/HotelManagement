package com.winy.WinyHotel.service.interfac;

import com.winy.WinyHotel.dto.LoginRequest;
import com.winy.WinyHotel.dto.Response;
import com.winy.WinyHotel.entity.User;

public interface IUserService {
    Response register(User user);

    Response login(LoginRequest loginRequest);

    Response getAllUsers();

    Response getUserBookingHistory(String userId);

    Response deleteUser(String userId);

    Response getUserById(String userId);

    Response getMyInfo(String email);

}
