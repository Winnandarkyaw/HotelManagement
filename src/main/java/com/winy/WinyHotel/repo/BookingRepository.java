package com.winy.WinyHotel.repo;

import com.winy.WinyHotel.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking,Long> {
    List<Booking> findByRoomId(Long roomId);
    List<Booking>findByBookingConfirmationCode(String confirmationCode);
    List<Booking>findByUserId(Long userId);
}
