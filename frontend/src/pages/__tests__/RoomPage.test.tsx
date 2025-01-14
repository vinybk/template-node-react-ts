test('renders RoomPage', () => {
    render(<RoomPage />);
    expect(screen.getByText(/Room Page Title/)).toBeInTheDocument();
});
  