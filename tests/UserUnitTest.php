<?php

namespace App\Tests;

use App\Entity\User;
use PHPUnit\Framework\TestCase;

class UserUnitTest extends TestCase
{
    public function testIsTrue(): void
    {
        $user = new User();

        $user->setEmail('test@test.com')
            ->setPassword('password')
            ->setRoles(['ROLE_TEST'])
            ->setVerified(true);

        $this->assertSame('test@test.com', $user->getEmail());
        $this->assertSame('password', $user->getPassword(),);
        $this->assertSame($user->getRoles(), ['ROLE_TEST', 'ROLE_USER']);
        $this->assertSame(true, $user->isVerified());
    }

    public function testIsFalse(): void
    {
        $user = new User();

        $user->setEmail('test@test.com')
            ->setPassword('password')
            ->setRoles(['ROLE_TEST'])
            ->setVerified(true);

        $this->assertFalse($user->isVerified() === false);
        $this->assertFalse($user->getEmail() === 'false@test.com');
        $this->assertFalse($user->getPassword() === 'false');
        $this->assertFalse($user->getRoles() === ['ROLE_FALSE']);
    }

    public function testIsEmpty(): void
    {
        $user = new User();

        $this->assertEmpty($user->isVerified());
        $this->assertEmpty($user->getEmail());
        $this->assertEmpty($user->getPassword());
    }
}
